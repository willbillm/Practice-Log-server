Getting started:

In the terminal, run the command 'npm install' to install necessary dependencies.

Database:

To store data, you will have to create a MongoDB database and connect it to the app.

You will change the .txt file to a .env file and fill in the info for DB_USERNAME, DB_PASSWORD, DB_CLUSTER, and DB_STRING. To get this info, you'll have to create a MongoDB cluster.

Follow the steps below to create your MongoDB cluster.

First create an account at the following, 'https://www.mongodb.com/cloud/atlas/register'

Once created you will be asked to deploy a cloud database, select the free option 'Shared'.

Pick any cloud provider and select a nearby region. 

Do not change the default options under cluster tier or additional settings.

Create a name under cluster name or leave the default. This name will be entered in the .env file under DB_CLUSTER.

Select 'Create Cluster'.

You'll then be asked to set up a username and password for access to your cluster. This information will be entered in your .env file under DB_USERNAME and DB_PASSWORD.

On the MongoDB site in the sidebar under 'DEPLOYMENT', select 'Database'. Wait for mongoDB to finish creating your cluster. Once finished, click 'Connect'.

You'll be asked to add an I.P. adress for network access. Select 'Add Your Current IP Address' and click 'Add IP address'.

Next click 'Choose a connection method' and select 'Connect your application'.

Under 'Select your driver and version', choose 'Node.js'

Under 'Add your connection string into your application code', leave the 'Include full driver code example' box unchecked.

index.js already contains the the standard information for your connection string. The .env file is where the unique parts of your connection string are included.

Under DB_STRING, include the string following your cluster name in the connection string. Once this information is recorded, select 'close'.

Once you have entered the correct information in your .env file and saved, run the command 'npm start' in your terminal.

If you have followed the steps correctly, your terminal will return 'Server is listening on port: 5000'.

The server should now be fully functional and the information entered on the client end will be saved in your MongoDB cluster.

Client:

Refer to the repository 'Practice-Log-client' for instructions on setting up the front end of the app.


