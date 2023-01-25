import React from 'react'
import ItemListing from '../../Shared/ItemListig'
import SectionHeader from '../../Shared/SectionHeader'
import Latest1 from "../../assets/image1.jpg"
import Latest2 from "../../assets/image2.jpg"
import Latest3 from "../../assets/image3.jpg"
import Latest4 from "../../assets/image4.jpg"
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
const Life = () => {
    return (
        <Section>
            <SectionHeader title="Life & Style" />
            <ItemListing data={latestData} />
        </Section>
    )
}

export default Life