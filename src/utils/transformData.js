export const transformData = (data, images) => ({
    name: data.name,
    email: data.email,
    title: data.title,
    location: {
        building: data.building.label,
        auditorium: data.auditorium.label,
    },
    photos: images.map((elem) => elem.data_url),
});