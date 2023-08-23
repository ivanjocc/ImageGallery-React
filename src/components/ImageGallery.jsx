import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/styles.css';

const CatImageGallery = () => {
	const [catImages, setCatImages] = useState([]);

	useEffect(() => {
		fetchCatImages();
	}, []);

	const fetchCatImages = async () => {
		try {
			const response = await axios.get(
				'https://api.thecatapi.com/v1/images/search?limit=10'
			);
			setCatImages(response.data);
		} catch (error) {
			console.error('Error fetching cat images:', error);
		}
	};

	const handleRefresh = () => {
		window.location.reload();
	};

	return (
		<div className="gallery">
			<button className="refresh-button" onClick={handleRefresh}>
				Refresh
			</button>
			{catImages.map((catImage) => (
				<img
					key={catImage.id}
					src={catImage.url}
					alt={`Cat ${catImage.id}`}
					className="image cat-image"
				/>
			))}
		</div>
	);
};

export default CatImageGallery;
