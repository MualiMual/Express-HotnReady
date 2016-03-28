# Welcome to a Hot n Ready🍕 Nodejs App

This is a express server with a simple configuration. 

The Recipe:
Node Express Jade Socketio Mongoose Nodemon 

Wiki Here : https://github.com/NobleGestures/Express-HotnReady/wiki/HotnReady%F0%9F%8D%95-Nodejs-App


///////////////5 easy steps to running your server via CLI with 4 terminals

//App Home  
        cd app
        
//App Home  
        npm install

//New Terminal: 
        mongodb --smallfiles
    
//New Terminal: 
        mongo use mmdatabase
    
//New Terminal: 
        nodemon

// launched app instance
    

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


