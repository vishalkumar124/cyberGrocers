import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = (props) => {
    return <Helmet>
        <title>{props.title}</title>
        <meta name='description' content={props.description} />
        <meta name='keywords' content={props.keywords} />
    </Helmet>
}

Meta.defaultProps = {
    title: 'CyberGrocers',
    description: 'CyberGrocers - The best Grocerys e-commerce website',
    keywords: 'Grocerys, fruits, buy vegetables, fruits, juice, stuff'  
};

export default Meta;