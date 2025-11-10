const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017');

async function run() {
    try {
        await client.connect();
        console.log('✅ Connected to MongoDB');

        const database = client.db('assignmentdb');
        const students = database.collection('students');

        // INSERT MANY
        // const insertResult = await students.insertMany([
        //     { name: 'Mohamed', age: 21, department: 'Multimedia' },
        //     { name: 'Asha', age: 22, department: 'Mathematics' },
        //     { name: 'Asma', age: 25, department: 'Physics' },
        //     { name: 'Abdi', age: 19, department: 'PA' },
        //     { name: 'Omar', age: 20, department: 'Health' },
        //     { name: 'Mohamed', age: 23, department: 'IT' }
        // ]);

        // FIND ALL
        //const allStudents = await students.find({}).toArray();

        // UPDATE MANY
        // const updateResult = await students.updateMany(
        //     { name: 'Mohamed' },
        //     { $set: { department: 'Computer Science' } }
        // );

        // DELETE ONE
        //const deleteOneResult = await students.deleteOne({ name: 'Abdi' });

        // DELETE MANY
        //const deleteManyResult = await students.deleteMany({ name: 'Mohamed' });

        // FIND WITH FILTER (age > 21)
        //const filteredStudents = await students.find({ age: { $gt: 21 } }).toArray();
        // console.log(' Students older than 21:');

    } catch (err) {
        console.error(' Connection or operation failed:', err);
    } finally {
        await client.close();
    }
}

run();
