import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";


export const assets = {
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

export const cities = [
    "Dubai",
    "Singapore",
    "New York",
    "London",
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]

// Testimonials Dummy Data
export const testimonials = [
    { id: 1, name: "Vishnu vel", address: "Chennai ", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
    { id: 2, name: "Ayyapan", address: "Kanyakumari", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Magi", address: "Thirunalveli", image: "data:image/jpeg;base64,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", rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
];

// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Great Stack",
    "email": "user.greatstack@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "New York"
    ]
}

// Hotel Dummy Data
export const hotelDummyData = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Urbanza Suites",
    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "New York",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Rooms Dummy Data
export const roomsDummyData = [
    {
        "_id": "67f7647c197ac559e4089b96",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "67f76452197ac559e4089b8e",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 299,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg2, roomImg3, roomImg4, roomImg1],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:25:22.593Z",
        "updatedAt": "2025-04-10T06:25:22.593Z",
        "__v": 0
    },
    {
        "_id": "67f76406197ac559e4089b82",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 249,
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg3, roomImg4, roomImg1, roomImg2],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:24:06.285Z",
        "updatedAt": "2025-04-10T06:24:06.285Z",
        "__v": 0
    },
    {
        "_id": "67f763d8197ac559e4089b7a",
        "hotel": hotelDummyData,
        "roomType": "Single Bed",
        "pricePerNight": 199,
        "amenities": ["Free WiFi", "Room Service", "Pool Access"],
        "images": [roomImg4, roomImg1, roomImg2, roomImg3],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    }
]



// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "room": roomsDummyData[3],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/