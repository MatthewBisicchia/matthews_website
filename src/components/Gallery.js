import React, { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './styles/Gallery.css';

const Gallery = () => {

    // Function to import all images from a given directory:
    function importAll(r) {
        return r.keys().map(r);
    }
      
    // Load images into the appropriate columns:
    let imageSources = importAll(require.context('../images_column1', false, /\.(png|jpe?g|svg)$/));
    let imagesColumn1 = []
    for(let i = 0; i < imageSources.length; i++) {
        imagesColumn1.push({ id: i, source: imageSources[i]})
    }
    imageSources = importAll(require.context('../images_column2', false, /\.(png|jpe?g|svg)$/));
    let imagesColumn2 = []
    for(let i = 0; i < imageSources.length; i++) {
        imagesColumn2.push({ id: i, source: imageSources[i]})
    }
    imageSources = importAll(require.context('../images_column3', false, /\.(png|jpe?g|svg)$/));
    let imagesColumn3 = []
    for(let i = 0; i < imageSources.length; i++) {
        imagesColumn3.push({ id: i, source: imageSources[i]})
    }
    
    // State of a selected image:
    const [selectedAnImage, setSelectedAnImage] = useState(false);
    const [sourceOfSelectedImage, setSourceOfSelectedImage] = useState('');
    const [idOfSelectedImage, setIdOfSelectedImage] = useState('');
    const [columnSelected, setColumnSelected] = useState('');

    // Function to set the selected image:
    const selectImage = (imageSource, id, columnSelected)=>{
        setSourceOfSelectedImage(imageSource);
        setSelectedAnImage(true);
        setIdOfSelectedImage(id);
        setColumnSelected(columnSelected);
    }

    // Function to handle button to change image:
    const handleChangeImage = (direction)=>{
        if (direction === 'back') {
            if (columnSelected === 'column1') {
                selectImage(imagesColumn3[idOfSelectedImage - 1].source, idOfSelectedImage - 1, 'column3')
            }
            else if (columnSelected === 'column2') {
                selectImage(imagesColumn1[idOfSelectedImage].source, idOfSelectedImage, 'column1')
            }
            else if (columnSelected === 'column3') {
                selectImage(imagesColumn2[idOfSelectedImage].source, idOfSelectedImage, 'column2')
            }
        } else if (direction === 'forward') {
            
            if (columnSelected === 'column1') {
                selectImage(imagesColumn2[idOfSelectedImage].source, idOfSelectedImage, 'column2')
            }
            else if (columnSelected === 'column2') {
                selectImage(imagesColumn3[idOfSelectedImage].source, idOfSelectedImage, 'column3')
            }
            else if (columnSelected === 'column3') {
                selectImage(imagesColumn1[idOfSelectedImage + 1].source, idOfSelectedImage + 1, 'column1')
            }
        }
    }

    return(
        <>
            <div className={selectedAnImage ? "model open" : "model"}>
                <img src={sourceOfSelectedImage} />
                <CloseIcon className="close" onClick={() => setSelectedAnImage(false)}/>
                <ArrowBackIcon  className="arrowBack" onClick={() =>  handleChangeImage('back') }/>
                <ArrowForwardIcon className="arrowForward" onClick={() => handleChangeImage('forward') }/>

                {/* selectImage(images[idOfSelectedImage - 1].source, idOfSelectedImage - 1)
                selectImage(images[idOfSelectedImage + 1].source, idOfSelectedImage + 1) */}
            </div>
            <div className="columns">
                <div className="gallery">
                    {
                        imagesColumn1.map((imagesColumn1, index)=>{
                            return(
                                <div className="pics" key={index} onClick={()=>selectImage(imagesColumn1.source, imagesColumn1.id, 'column1') }>
                                    <img src={imagesColumn1.source} style={{width: '100%'}}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="gallery">
                    {
                        imagesColumn2.map((imagesColumn2, index)=>{
                            return(
                                <div className="pics" key={index} onClick={()=>selectImage(imagesColumn2.source, imagesColumn2.id, 'column2') }>
                                    <img src={imagesColumn2.source} style={{width: '100%'}}/>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="gallery">
                    {
                        imagesColumn3.map((imagesColumn3, index)=>{
                            return(
                                <div className="pics" key={index} onClick={()=>selectImage(imagesColumn3.source, imagesColumn3.id, 'column3') }>
                                    <img src={imagesColumn3.source} style={{width: '100%'}}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Gallery;