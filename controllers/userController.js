import express from "express";
import mongoose from "mongoose";

import User from "../models/userModel.js";


//An API to fatch a all record to the dataset.
export const getAllUser = async (req, res) => {
  try {
    const allUsers = await User.find({});

    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


//An API to add a new record to the dataset.
export const createUser = async (req, res) => {
   
  const { name, salary, currency, department, on_contract, sub_department } =
    req.body;

  const newUser = new User({
    name,
    salary,
    currency,
    department,
    on_contract,
    sub_department,
  });

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({message : error.message})
  }


};

//An API to delete a new record to the dataset.
export const deleteUser = async(req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No Post with this id ${id}`)
    }

    await User.findByIdAndDelete(id);
    res.json({message: "User is successfully deleted"})

}

// API to fetch SS for salary over the entire dataset.
export const getSalarySS = async(req,res)=>{
    const salarySummaryStats = await User.aggregate([
      {
        $group: {
          _id: null,
          mean: { $avg: "$salary" },
          min: { $min: "$salary" },
          max: { $max: "$salary" },
        },
      },
    ]);

    res.json(salarySummaryStats[0]);
}

// API to fetch SS for salary for records which satisfy "on_contract": "true".
export const getSalarySSForContractors =async (req,res)=>{
    const salarySummaryStats = await User.aggregate([
      { $match: { on_contract: true } },
      {
        $group: {
          _id: null,
          mean: { $avg: "$salary" },
          min: { $min: "$salary" },
          max: { $max: "$salary" },
        },
      },
    ]);

    res.json(salarySummaryStats[0]);

}

// API to fetch SS for salary for each department.
export const getSalarySSForDepartment = async(req,res)=>{
    const salarySummaryStats = await User.aggregate([
      {
        $group: {
          _id: "$department",
          mean: { $avg: "$salary" },
          min: { $min: "$salary" },
          max: { $max: "$salary" },
        },
      },
    ]);

    res.json(salarySummaryStats);
}

// API to fetch SS for salary for each department and sub-department combination.
export const getSalarySSByDepartmentAndSubDepartment = async(req,res)=>{
    const salarySummaryStats = await User.aggregate([
      {
        $group: {
          _id: { department: "$department", subDepartment: "$subDepartment" },
          mean: { $avg: "$salary" },
          min: { $min: "$salary" },
          max: { $max: "$salary" },
        },
      },
    ]);

    res.json(salarySummaryStats);
}
