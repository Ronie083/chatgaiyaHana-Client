import React from 'react';
import PopularTags from '../PupularTags/PopularTags';
import Follow from '../Follow/Follow';

const RightContent = () => {
    return (
        <div>
            <Follow></Follow>
            <PopularTags></PopularTags>
        </div>
    );
};

export default RightContent;