export const transformData = (data) => ({
    name: data.name,
    email: data.email,
    title: data.title,
    location: {
        building: data.building.label,
        auditorium: data.auditorium.label,
    }
});