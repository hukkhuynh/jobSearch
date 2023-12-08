import React from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { COLORS } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'
import { useRouter } from 'expo-router'


import styles from './nearbyjobs.style'

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
  query: "React developer",
  num_pages: "1"});

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text styles={styles.headerTitle}>Near by jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>
            Show All
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size= "large" colors ={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard 
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}

            />
          ))
        )
        }
      </View>
      
    </View>
  )
}

export default Nearbyjobs;