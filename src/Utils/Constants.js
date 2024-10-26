import myImage from "../resources/images/myImage.jpg"
import { CodeRounded, ContactPageRounded, FacebookRounded, HomeRounded, SchoolRounded } from "@mui/icons-material";
import ContactsIcon from '@mui/icons-material/Contacts';


export const userProfileDefaultData={
    "Name"      :"SAI GANESH",
    "UserName"  :"Sai_Ganesh",
    "DOB"       :"02-01-2003",
    "Address"   :"mdh",
    "EmailID"   :"saiganeshgb@gmail.com",
    "PhoneNo"   :"8688346938",
    "Description":"I'm a student",
    "Photo"     : myImage
}

export const IconTitleMap={
    "Home": <HomeRounded className="icon"/>,
    "Academics": <SchoolRounded className="icon"/>,
    "Projects": <CodeRounded className="icon"/>,
    "Social Profiles": <FacebookRounded className="icon"/>,
    "Resume": <ContactPageRounded className="icon"/>,
    "ContactUs":<ContactsIcon className="icon"/>
}

export const DEFAULT_SIDE_MENU=[
    {
        "title": "Home",
        "icon":  IconTitleMap.Home,
        "link": "/home"
    },
    {
        "title": "Academics",
        "icon": IconTitleMap.Academics,
        "link": "/academics"
    },
    {
        "title": "Projects",
        "icon": IconTitleMap.Projects,
        "link": "/projects"
    },
    {
        "title": "Social Profiles",
        "icon": IconTitleMap["Social Profiles"],
        "link": "/social-profile"
    },
    {
        "title": "Resume",
        "icon": IconTitleMap.Resume,
        "link": "/resume"
    },
    {
        
       "title": "ContactUs",
       "icon":IconTitleMap.ContactUs,
       "link":"/contact"
       
    }
]


export const DEFAULT_DRAWER_FLAG= true;
export const DEFAULT_ACTIVE_PAGE= DEFAULT_SIDE_MENU[0].title

export const drawerWidth = 300;


export const DarkTheme              = "dark"
export const LightTheme             = "light"
