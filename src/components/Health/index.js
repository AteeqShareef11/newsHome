import React from 'react'
import ItemListing from '../../Shared/ItemListig'
import SectionHeader from '../../Shared/SectionHeader'
import Latest1 from "../../assets/health1.jpg"
import Latest2 from "../../assets/health2.jpg"
import Section from '../../Shared/Section'


const HealthData = [
    {
        id: 0,
        image: Latest1,
        title: "The Best Way To Why Food Is Important For Us",
        writer: "Amelia"
    },
    {
        id: 1,
        image: Latest2,
        title: "The Best Way To Why Food Is Important For Us",
        writer: "Amelia"
    },


]

const Health = () => {
    return (
        <Section>
            <SectionHeader title="Healh" />
            <ItemListing data={HealthData} />
        </Section>
    )
}

export default Health