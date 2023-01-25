import React from 'react'
import Latest1 from "../../assets/edu1.jpg"
import Latest2 from "../../assets/edu2.jpg"
import ItemListing from '../../Shared/ItemListig'
import Section from '../../Shared/Section'
import SectionHeader from '../../Shared/SectionHeader'


const educationData = [
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
const Education = () => {
    return (
        <Section>
            <SectionHeader title="Education" />
            <ItemListing data={educationData} />
        </Section>
    )
}

export default Education