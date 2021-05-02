RU Hacks 2021


Re:Start
https://ru-hacks-2021.devpost.com/
90 Minute Sleep Cycle Idea:
Description: 
When you sleep, you go into 90 minute
Press when you sleep (record the time)
Press when you wake up (record the time)
Choose your happiness level
Repeat

Day
Start
End
Happiness (0-100))
Optimize 
1
9 pm
6am 
10







Npm install create-react-app
Npx create-react-app restart
//Npm install react-router-dom (in lower case restart)
//Npm install react-bootstrap (in lower case restart)
npm install react-range-step-input
npm install react-time-range-slider
Npm install react-time-picker
//npm install --save @google-cloud/storage




## Inspiration
Our app was inspired by the idea of the 90 minute sleep cycle. Humans sleep in cycles of 90 minutes and we often wake up refreshed after a 90 minute sleep cycle. This is what inspired us to make Re:Start, a 90 minute sleep cycle clock.


## What it does
RE:START is a web application that allows you to input when you want to wake up by, and it gives a suggested time for you to wake up to maximize your quality of sleep. Afterwards, it allows you to input when you fall asleep, and later when you wake up, and your enjoyment level so that the information can be used later on to more accurately predict results the next time you use RE:START.


## How we built it
We built RE:START using Node.js: React. We experimented with both functional components and class components and tackled HTML & CSS for the first time.

We deconstructed our app into 3 main parts: Title component, TimeDisplay component, and the Controls component. The controls component also has 3 main components: StartComponent, AwakeComponent, and EndComponent which change throughout the use of the app.

Using Google Cloud AutoML Tables, we used a randomized base data-set to create 3 different models that can output the optimized time to sleep, time to wake up, and quality of sleep, based on the other two factors that aren’t being solved for. For example, if you wanted to predict the quality of your sleep would be, you would input the time you went to sleep and what time you plan to wake up, it’ll output what the quality of sleep would be based on the model.


## Challenges we ran into
It was our first time trying to integrate google cloud services to our application. Learning and getting started using their applications were difficult and we commonly ran into problems when deploying their services. 


## Accomplishments that we're proud of
The biggest accomplishment we’re proud of is the web application interface itself, as this was the first time that any of us ever attempted creating one.


## What we learned
We learned how to create a web application and ways of integrating data sets into google’s machine learning. 


## What's next for Re:Start
We plan to later use information collected from the user's Apple Watch, which accurately tracks when they fell asleep, the time they woke up, and the different stages of sleep they went through at what time. Using this data, we hope to make a more user-accurate machine learning algorithm that gives more personalized results when using Re:Three.



I learned how to use Google Cloud Services such as SQL and the basics of HTML, JS. 

I learned how to use Google Cloud AutoML Tables in order to produce the three models that we used and the basics of JS.


I used ReactJS and Premier Pro! :)


Readme

# Introduction
This app was inspired by the idea of the 90-minute sleep cycle. We wake up more refreshed when humans wake up at the end of a 90-minute sleep cycle.
Re:Start aims to wake you up at this ideal time.

# Components
##Title Component:
Contains the title and description

##TimeDisplay Component:
Contains the current date & time (updates in real-time)

##Controls component
Consists of main controls of the app.
1. Start component
2. Awake component
3. End component


# NPM installs:
```
npm install create-react-app
npx create-react-app restart
npm install react-range-step-input
npm install react-time-range-slider
npm install react-time-picker
```

# Presentation Submission
https://youtu.be/YTvmJBhho_Y

# Demo Video
https://www.youtube.com/watch?v=ChTIuU8rTyk


