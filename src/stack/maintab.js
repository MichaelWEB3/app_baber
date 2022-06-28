import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/home/home'
import Search from '../pages/search/search'
import Appointments from '../pages/appointments/appointments'
import Favorits from '../pages/favorits/favorits'
import Profile from '../pages/profile/profile'
import CutomTabBar from '../components/CutomTabBar'
import Barber from '../pages/barber/barber'

const Tab = createBottomTabNavigator()

export default function MainTab() {
    return (
        <>
            <Tab.Navigator screenOptions={{
                headerShown: false
            }} tabBar={props => <CutomTabBar {...props} />}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Search" component={Search} />
                <Tab.Screen name="Appointments" component={Appointments} />
                <Tab.Screen name="Favorits" component={Favorits} />
                <Tab.Screen name="Profile" component={Profile} />
            
                <Tab.Screen name="Barber" component={Barber} />
            
            </Tab.Navigator>
        </>
    )
}