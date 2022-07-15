# Dart_Xpress
## Delivery App

#### Progressive Web app(PWA) that provide fast & secure courier delivery service to the customers, during the pandemic time.
## Motivation 
As we know that with an estimated one-third of the global population on lockdown, thousands of small businesses, retailers or even mom-and-pop shops have moved to the online space.
Pick up and delivery services have never been in higher demand.
## Process

#### 1-> Create Job
The new user sign in as a customer and register his/her Stripe card and then creates a job for pick-up 

#### 2-> Pick Up
All the courier person get the notification for the Job and one will accept and come to pick up


#### 3-> Tracking
The customer's can track the courier's location in a real-time.

#### 4-> Delivery
Finally the product is delivered safely and job is completed. The admin can send the 80% commision to the delivery / courier guy.


## Features 
 List all jobs on Google Map

 Real-time GPS Tracking

 Route with distance and time

 Taking photo from device’s camera

 Total Earnings and Driven miles

 Google Map API libraries

 Push Notification
 Authentication with Email/Facebook

 Send welcome emails automatically

 Upload Profile Photo

 Mobile Number Verification (SMS)

 Handle Credit Card with Stripe

 In-app Notification

 Real-time GPS Tracking

## Tech used
#### Django<br>
#### Rest API<br>
#### Google API<br>
#### Stripe<br>
#### Paypal<br>
#### Redis<br>
#### Django - Channels<br>


## Demo/ Screenshot



<p align="center">
  <img src="https://user-images.githubusercontent.com/58811384/163833649-dd277ae8-bafa-478f-b03e-dedf8e1d63c9.png">
  </br>
  Customer Side Preview
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/58811384/179199435-6a3a54c3-d238-4c21-9841-aa580158deb7.png">
  </br>
  Customer Side Real Time tracking
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/58811384/179191150-5af2e17c-c7f8-46dc-b596-cb368522c174.png">
  </br>
  Courier Side Preview
</p>




## Usage:
1->Firstly, create a Firebase account, stripe account and Paypal developer account
Then fill the required variable in setting.py

    STRIPE_API_PUBLIC_KEY = ""
    STRIPE_API_SECRET_KEY = ""
    GOOGLE_MAP_API_KEY = ""
    PAYPAL_MODE = "sandbox"
    PAYPAL_CLIENT_ID = "YOUR_PAYPAL_CLIENT_ID"
    PAYPAL_CLIENT_SECRET = "YOUR_PAYPAL_CLIENT_SECRET"
    
2-> Go the location below and fill this with your firebase detail(this will be used in sending SMS through Firebase API) : 

     Dart_Xpress\core\templates\firebase-messaging-sw.js
     
3-> Ensure that Redis server is running in the background.

4->Then use the command below after coming to this directory

     *  pip install -r requirements.txt
     *  python manage.py runserver
            
