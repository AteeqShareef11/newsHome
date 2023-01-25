import React from 'react'
import ItemListing from '../../Shared/ItemListig'
import SectionHeader from '../../Shared/SectionHeader'
import Latest1 from "../../assets/tech1.jpg"
import Latest2 from "../../assets/tech2.jpg"
import Latest3 from "../../assets/tech3.jpeg"
import Latest4 from "../../assets/tech4.jpg"
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
    {
        id: 3,
        image: Latest4,
        title: "The Best Way To Why Food Is Important For Us",
        writer: "Amelia"
    },

]

const Technology = () => {
    return (
        <Section>
            <SectionHeader title="Technology" />
            <ItemListing data={latestData} />
        </Section>
    )
}

export default Technology