import React, { useState, useContext } from 'react';

import AppContext from '../../context/AppContext';
import layout from '../../styles/layout.css';

const Chapter = ({ chapterInfo }) => {
    const { setViewedChapter, setViewedChapterHash } = useContext(AppContext);
    const [ isActiveChapter, setIsActiveChapter ] = useState(false);

    const buildChapterString = () => {
        return "ch." + chapterInfo.attributes.chapter + ": " + chapterInfo.attributes.title;
    }

    const handleChapterClick = () => {
        setIsActiveChapter(true);
        setViewedChapter(chapterInfo.attributes.data);
        setViewedChapterHash(chapterInfo.attributes.hash);
    }

    const chapterStyling = () => {
        let classes = "chapter";
        if (isActiveChapter) {
            classes += " activeChapter";
        }
        return classes;
    }

    return (
        <div className={chapterStyling()} >
            { chapterInfo ? 
                <span className="titleLink" onClick={handleChapterClick}>
                    {buildChapterString()}
                </span> :
                <></>
            }
        </div>
    )
}

export default Chapter;