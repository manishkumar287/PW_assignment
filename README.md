# PW_assignment
PW Assignment repo

1. Clone or download the repository to your local machine.
2. Open a terminal or command prompt and navigate to the directory containing the script.
3. Install the required packages by running npm install in the terminal/command prompt.
4. Run the script by running node index.js in the terminal/command prompt.

Endpoints
base url : http://localhost:8090/home

1. An API to add a new record to the dataset.
    POST /
   
    body:{
    "name": "Piyush",
    "salary": 20554,
    "currency": "INR",
    "department": "Math",
    "on_contract": false,
    "sub_department": "trignomatry"
}

2. An API to delete a new record to the dataset.
   DELETE /{id}

3. An API to fetch SS for salary over the entire dataset. You can ignore the currency (if not mentioned otherwise) of the salary and simply treat salary as a number.
   GET /getsalarySS

4. An API to fetch SS for salary for records which satisfy "on_contract": "true".
  GET /getsalarySS/contractors

5. An API to fetch SS for salary for each department. This means that whatever you’ll do in Step 3, should be done for each department. The return of this API should have 1 SS available for each unique department.
   GET /getsalarySS/department

6. An API to fetch SS for salary for each department and sub-department combination. This is similar to Case 5 but 1 level of nested aggregation.
   GET /getsalarySS/department-and-subdepartment
   


