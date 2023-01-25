import React from 'react'
import ItemListing from '../../Shared/ItemListig'
import SectionHeader from '../../Shared/SectionHeader'
import Latest1 from "../../assets/sports1.jpg"
import Latest2 from "../../assets/sports2.jpg"
import Latest3 from "../../assets/sports3.png"
import Section from '../../Shared/Section'



const latestData = [
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
    {
        id: 2,
        image: Latest3,
        title: "The Best Way To Why Food Is Important For Us",
        writer: "Amelia"
    },
]

const Sports = () => {
    return (
        <Section>
            <SectionHeader title="Sports" />
            <ItemListing data={latestData} />
        </Section>
    )
}

export default Sports