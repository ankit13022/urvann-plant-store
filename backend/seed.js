require('dotenv').config();
const mongoose = require('mongoose');
const Plant = require('./models/Plant');

const plants = [
    { name: 'Money Plant', price: 299, categories: ['Indoor', 'Air Purifying', 'Home Decor'], availability: true },
    { name: 'Snake Plant', price: 449, categories: ['Indoor', 'Air Purifying', 'Low Maintenance'], availability: true },
    { name: 'Peace Lily', price: 399, categories: ['Indoor', 'Air Purifying', 'Flowering'], availability: false },
    { name: 'Rubber Plant', price: 599, categories: ['Indoor', 'Home Decor', 'Large Plants'], availability: true },
    { name: 'Aloe Vera', price: 249, categories: ['Succulent', 'Medicinal', 'Low Maintenance'], availability: true },
    { name: 'Spider Plant', price: 199, categories: ['Indoor', 'Air Purifying', 'Hanging'], availability: true },
    { name: 'Monstera Deliciosa', price: 899, categories: ['Indoor', 'Tropical', 'Large Plants'], availability: true },
    { name: 'Fiddle Leaf Fig', price: 1299, categories: ['Indoor', 'Home Decor', 'Large Plants'], availability: false },
    { name: 'Boston Fern', price: 349, categories: ['Indoor', 'Hanging', 'Humidity Loving'], availability: true },
    { name: 'ZZ Plant', price: 499, categories: ['Indoor', 'Low Maintenance', 'Air Purifying'], availability: true },
    { name: 'Jade Plant', price: 299, categories: ['Succulent', 'Indoor', 'Lucky Plant'], availability: true },
    { name: 'Pothos', price: 199, categories: ['Indoor', 'Trailing', 'Air Purifying'], availability: true },
    { name: 'Philodendron', price: 349, categories: ['Indoor', 'Trailing', 'Tropical'], availability: true },
    { name: 'Cactus Mix', price: 399, categories: ['Succulent', 'Desert', 'Low Maintenance'], availability: true },
    { name: 'Bamboo Palm', price: 799, categories: ['Indoor', 'Air Purifying', 'Large Plants'], availability: true },
    { name: 'Areca Palm', price: 699, categories: ['Indoor', 'Air Purifying', 'Tropical'], availability: false },
    { name: 'English Ivy', price: 249, categories: ['Indoor', 'Trailing', 'Air Purifying'], availability: true },
    { name: 'Dracaena', price: 549, categories: ['Indoor', 'Air Purifying', 'Colorful'], availability: true },
    { name: 'Chinese Evergreen', price: 449, categories: ['Indoor', 'Colorful', 'Low Light'], availability: true },
    { name: 'Croton', price: 399, categories: ['Indoor', 'Colorful', 'Tropical'], availability: true },
    { name: 'Haworthia', price: 199, categories: ['Succulent', 'Small Plants', 'Desktop'], availability: true },
    { name: 'Echeveria', price: 249, categories: ['Succulent', 'Rosette', 'Colorful'], availability: true },
    { name: 'String of Pearls', price: 299, categories: ['Succulent', 'Trailing', 'Unique'], availability: false },
    { name: 'Bird of Paradise', price: 1499, categories: ['Indoor', 'Tropical', 'Statement Plant'], availability: true },
    { name: 'Calathea', price: 499, categories: ['Indoor', 'Prayer Plant', 'Patterned Leaves'], availability: true },
    { name: 'Anthurium', price: 649, categories: ['Indoor', 'Flowering', 'Tropical'], availability: true },
    { name: 'Dieffenbachia', price: 399, categories: ['Indoor', 'Large Leaves', 'Tropical'], availability: true },
    { name: 'Schefflera', price: 449, categories: ['Indoor', 'Umbrella Plant', 'Easy Care'], availability: true },
    { name: 'Yucca Plant', price: 699, categories: ['Indoor', 'Desert', 'Statement Plant'], availability: true },
    { name: 'Norfolk Pine', price: 899, categories: ['Indoor', 'Christmas Tree', 'Large Plants'], availability: false },
    { name: 'Ponytail Palm', price: 599, categories: ['Indoor', 'Unique', 'Low Maintenance'], availability: true },
    { name: 'Swiss Cheese Plant', price: 799, categories: ['Indoor', 'Tropical', 'Climbing'], availability: true },
    { name: 'Parlor Palm', price: 349, categories: ['Indoor', 'Small Palms', 'Low Light'], availability: true },
    { name: 'Majesty Palm', price: 999, categories: ['Indoor', 'Large Palms', 'Tropical'], availability: true },
    { name: 'Kentia Palm', price: 1199, categories: ['Indoor', 'Elegant', 'Large Plants'], availability: false },
    { name: 'Cast Iron Plant', price: 399, categories: ['Indoor', 'Low Light', 'Hardy'], availability: true },
    { name: 'Prayer Plant', price: 349, categories: ['Indoor', 'Moving Leaves', 'Unique'], availability: true },
    { name: 'Begonia', price: 299, categories: ['Indoor', 'Flowering', 'Colorful'], availability: true },
    { name: 'Cyclamen', price: 449, categories: ['Indoor', 'Flowering', 'Seasonal'], availability: true },
    { name: 'African Violet', price: 249, categories: ['Indoor', 'Flowering', 'Small Plants'], availability: true },
    { name: 'Geranium', price: 199, categories: ['Outdoor', 'Flowering', 'Colorful'], availability: true },
    { name: 'Marigold', price: 99, categories: ['Outdoor', 'Flowering', 'Annual'], availability: true },
    { name: 'Petunia', price: 149, categories: ['Outdoor', 'Flowering', 'Hanging'], availability: false },
    { name: 'Impatiens', price: 129, categories: ['Outdoor', 'Flowering', 'Shade Loving'], availability: true },
    { name: 'Coleus', price: 179, categories: ['Outdoor', 'Colorful Foliage', 'Shade'], availability: true },
    { name: 'Caladium', price: 299, categories: ['Outdoor', 'Colorful Leaves', 'Tropical'], availability: true },
    { name: 'Hosta', price: 399, categories: ['Outdoor', 'Shade Perennial', 'Large Leaves'], availability: true },
    { name: 'Fern Varieties', price: 249, categories: ['Outdoor', 'Shade Loving', 'Green'], availability: true },
    { name: 'Lavender', price: 349, categories: ['Outdoor', 'Aromatic', 'Perennial'], availability: true },
    { name: 'Rosemary', price: 199, categories: ['Outdoor', 'Herbs', 'Aromatic'], availability: true },
    { name: 'Mint Plant', price: 149, categories: ['Outdoor', 'Herbs', 'Easy Growing'], availability: true },
    { name: 'Basil', price: 99, categories: ['Outdoor', 'Herbs', 'Culinary'], availability: true }
];

async function seedDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        await Plant.deleteMany({});
        await Plant.insertMany(plants);
        console.log("🌱 Database seeded!");
    } catch (err) {
        console.error("Seeding failed:", err.message);
    } finally {
        mongoose.connection.close();
    }
}

seedDB();
