import React from 'react'
import ItemListing from '../../Shared/ItemListig'
import SectionHeader from '../../Shared/SectionHeader'
import Latest1 from "../../assets/ent1.jpg"
import Latest2 from "../../assets/ent2.jpg"
import Latest3 from "../../assets/ent3.jpg"
import Latest4 from "../../assets/ent4.jpg"
import Section from '../../Shared/Section'

const entertainmetData = [
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
const Entertainment = () => {
    return (
        <Section>
            <SectionHeader title="Entertainment" />
            <ItemListing data={entertainmetData} />
        </Section>
    )

}

export default Entertainment