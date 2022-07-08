export const fetchBioStores = async () => {
	const response = await fetch(`https://api.foursquare.com/v2/venues/search?ll=43.
    65267326999575,-79.39545615725015&query=coffee stores&client_id=${process.env
		.FOURSQUARE_CLIENT_ID}&client_secret=${process.env.FOURSQUARE_CLIENT_SECRET}&
    v=20210525&limit=6`);
	const data = await response.json();
	return data.response.venues;
};
