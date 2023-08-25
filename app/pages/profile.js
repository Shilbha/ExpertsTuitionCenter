import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Calendar } from 'react-native-calendars';
import ProgressCircle from 'react-native-progress-circle'





const Profile = ({ user }) => {
  const [isStudent, setIsStudent] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleDateSelect = date => {
    setSelectedDate(date.dateString);
    setIsCalendarVisible(false);
  };

  const [studentAttendancePercentage, setStudentAttendancePercentage] = useState(80);
  const [teacherAttendancePercentage, setTeacherAttendancePercentage] = useState(60);


 

  return (
    <View>
   
   
      <View style={styles.container}>
        <Image source={require('../../assets/back.png')} style={styles.back} />
        <Image source={require('../../assets/profile.png')} style={styles.avatar} />
        
      </View>
      <View style={styles.box}>
   
        <Text style={styles.welcomeText}>Welcome back,</Text>
        
        <Text style={styles.username}>Uma</Text>
        {/* <Text style={styles.star}>▭</Text>
        <Text style={[styles.rect,{top:-30,left:240}]}>☆</Text>
        <Text style={styles.rect}>☆</Text>
        <Text style={[styles.circle,{transform:[{rotate:'-45deg'}]}]}>△</Text>
        <Text style={[styles.triangle,{top:-60,left:200,fontSize:20}]}>◯</Text>
        <Text style={[styles.triangle,{transform:[{rotate:'200deg'}],left:280}]}>△</Text>
        <Text style={[styles.star, { transform: [{ rotate: '45deg' }],top:-70,left:150,fontSize:18 }]}>☆</Text>
        <Text style={[styles.triangle,{top:10,left:330,fontSize:20}]}>□</Text>
        <Text style={[styles.triangle,{top:50,left:280,fontSize:16}]}>☆</Text> */}
      </View>
      {isCalendarVisible ? null : (
        <View style={styles.toggle}>
          <View style={styles.slider}>
            <TouchableOpacity
              onPress={() => setIsStudent(true)}
              style={[
                styles.sliderButton,
                isStudent ? styles.activeSliderButton : null,
                styles.rightRounded,
              ]}
            >
              <Text style={isStudent ? styles.sliderButtonTextActive : styles.sliderButtonText}>
                Students
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setIsStudent(false)}
              style={[
                styles.sliderButton,
                !isStudent ? styles.activeSliderButton : null,
                styles.leftRounded,
              ]}
            >
              <Text style={!isStudent ? styles.sliderButtonTextActive : styles.sliderButtonText}>
                Teachers
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dateContainer}>
            <TouchableOpacity onPress={toggleCalendar} style={styles.iconContainer}>
              <Icon name="calendar" size={25} style={styles.icon} />
            </TouchableOpacity>
            {selectedDate && (
              <Text style={styles.selectedDate}>{selectedDate}</Text>
            )}
          </View>
        </View>
      )}
      {isCalendarVisible ? (
        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={handleDateSelect}
            markedDates={{
              [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: 'blue',
              },
            }}
          />
        </View>
      ) : (
    
        <View style={styles.contentContainer}>
        {isStudent ? (
          <View>
          <View style={styles.studentContainer}>
            <Text style={styles.toggleViewText}>Attendance</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressCircle}>
                <ProgressCircle
                  percent={studentAttendancePercentage}
                  radius={67}
                  borderWidth={9}
                  color="#008080"
                  shadowColor="#999"
                  bgColor="#fff"
                >
                  <Text style={{ fontSize: 18 }}>{studentAttendancePercentage + '%'}</Text>
                </ProgressCircle>
              </View>
              <View >
              <View style={styles.percentageContainer}>
               
                  <Text style={styles.percentageText}><View style={[styles.colorRectangle, { backgroundColor: "#008080" }]} /> {studentAttendancePercentage + '%'} Present</Text>
                 
                </View>
                <View style={styles.percentageContainer}>
               
                  <Text style={styles.percentageText}><View style={[styles.colorRectangle, { backgroundColor: "#999" }]} /> {100 - studentAttendancePercentage + "%"} Absent</Text>
                
                </View>
              </View>
            </View>
           
          </View>
          <View style={styles.feeContainer}>
            <Text style={styles.toggleViewText}>Fee Status</Text>
                <View style={styles.subViewContainer}>
                  <View style={styles.feeSubView}>
                    <Text style={styles.feeViewText}>Paid</Text>
                    <Text style={[styles.feeViewText,{fontWeight:'bold',fontSize:20, padding:15}]} >92</Text>
                  </View>
                  <View style={styles.feeSubView}>
                    <Text style={styles.feeViewText}>Not Paid</Text>
                    <Text style={[styles.feeViewText,{fontWeight:'bold',fontSize:20, padding:15}]} >08</Text>
                  </View>
                </View>
              </View>
          </View>
          
        
          
        ) : (
          <View>
          <View style={styles.studentContainer}>
          <Text style={styles.toggleViewText}>Attendance</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressCircle}>
              <ProgressCircle
                percent={teacherAttendancePercentage}
                radius={67}
                borderWidth={9}
                color="#008080"
                shadowColor="#999"
                bgColor="#fff"
              >
                <Text style={{ fontSize: 18 }}>{teacherAttendancePercentage + '%'}</Text>
              </ProgressCircle>
            </View>
            <View >
            <View style={styles.percentageContainer}>
             
                <Text style={styles.percentageText}><View style={[styles.colorRectangle, { backgroundColor: "#008080" }]} /> {teacherAttendancePercentage + '%'} Present</Text>
               
              </View>
              <View style={styles.percentageContainer}>
             
                <Text style={styles.percentageText}><View style={[styles.colorRectangle, { backgroundColor: "#999" }]} /> {100-teacherAttendancePercentage + '%'} Absent</Text>
              
              </View>
            </View>
          </View>
        </View>
        <View style={styles.feeContainer}>
            <Text style={styles.toggleViewText}>Salary Status</Text>
                <View style={styles.subViewContainer}>
                  <View style={styles.feeSubView}>
                    <Text style={styles.feeViewText}>Credited</Text>
                    <Text style={[styles.feeViewText,{fontWeight:'bold',fontSize:20, padding:15}]} >07</Text>
                  </View>
                  <View style={styles.feeSubView}>
                    <Text style={styles.feeViewText}>Due</Text>
                    <Text style={[styles.feeViewText,{fontWeight:'bold',fontSize:20, padding:15}]} >03</Text>
                  </View>
                </View>
              </View>
        </View>
        )}
        </View>

    )}
  
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    height: 100,
    backgroundColor: '#B8CAF8',
    justifyContent: 'space-between',
    paddingTop: 50,
  },
  box: {
    height: 140,
    backgroundColor: '#B8CAF8',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    flexDirection: 'column',
    paddingLeft: 30,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 15,
  
  },
  back: {
    width: 30,
    height: 30,
  },
  username: {
    fontSize: 23,
    color: '#1C0E57',
  },
  welcomeText: {
    fontSize: 18,
    color: 'grey',
  },
  toggle: {
    height: 120,
    width: 350,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 45,
    marginTop: -47,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 5,
  },
  slider: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#1C0E57',
    marginBottom: 20,
    width: 300,
  },
  sliderButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeSliderButton: {
    backgroundColor: '#1C0E57',
  },
  rightRounded: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  leftRounded: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  sliderButtonText: {
    color: '#1C0E57',
    fontSize: 16,
  },
  sliderButtonTextActive: {
    color: 'white',
    fontSize: 16,
  },
 
  iconContainer: {
    marginBottom: 0,
  },
  icon: {
    color: '#1C0E57',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedDate: {
    marginTop: 0,
    fontSize: 14,
    paddingHorizontal:20,
    
  },
   calendarContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  studentContainer:{
    backgroundColor:'white',
    borderRadius:30,
    width:350,
    marginTop:17,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 5,
  },
  toggleViewText:{
    paddingHorizontal:20,
    fontSize:18,
    paddingTop:10,
    color:"#1C0E57"
  },
  progressCircle:{
    paddingVertical:20,
    paddingHorizontal:20,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  percentageText: {
    fontSize: 16,
    color: '#1C0E57',
  },
  colorRectangle: {
    width: 16,
    height: 16,
    marginLeft: 30,
    paddingRight:10,
  },
  feeContainer: {
   paddingTop:8,
   
  },
  subViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingLeft:20,
    paddingRight:20
  },
  feeSubView: {
    width: 130,
    height: 130,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 5,
  },
  feeViewText: {
    fontSize: 18,
    color: '#1C0E57',
  },
  // rect: {
  //   color: '#AA336A', 
  //   fontSize: 20,
  //   position: 'absolute',
  //   top: 45,
  //   left: 350, 
  // },
  // star:{
  //   color: "#008080", 
  //   fontSize: 22,
  //   position: 'absolute',
  //   top: 20,
  //   left: 230, 
  // },
  // circle:{
  //   color: "blue", 
  //   fontSize: 25,
  //   position: 'absolute',
  //   top: 50,
  //   left: 150, 
  // },
  // triangle:{
  //   color: "#800080", 
  //   fontSize: 27,
  //   position: 'absolute',
  //   top: -40,
  //   left: 300, 
  // }
});

export default Profile;


