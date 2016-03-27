Welcome to a Hot n Ready🍕 Nodejs App

This is a express server with a simple configuration. 

Demo Here : 


///////////////5 easy steps to running your server via CLI with 4 terminals

//App Home  
    cd app

//New Terminal 
    mongodb --smallfiles
    
//New Terminal 
    mongo use mmdatabase
    
//New Terminal 
    nodemon

// launched app instance
    click on the green run button or "right click app.js" then click "Run"
    Click link(Your code is running at https://..) to viw in broweser

///////////////Resources 


    //View database into mongo collections
	//New Terminal 
        mongo 
        show dbs

	//Insert data into mongo collections
	//New Terminal 
        mongo use mmdatabase
	    db.modelflows.insert({title: 'We are HotnReady!'})
	    
	//View collections
	//New Terminal 
        mongo use mmdatabase
        show collections
        db.modelflows.find().pretty()
	
	//verify or Kill mongod processes
	    ps ax | grep mongod
    	pkill -9 mongod
    	
    //If port 8080 in use 
	    ps ax | grep nodemon
	    kill -9 Portnumber


