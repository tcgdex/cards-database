import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Typhlosion ex",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		157,
	],
	hp: 150,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Quilava",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Bursting Up",
			},
			effect: {
				en: "Once during your turn, when you play Typhlosion ex from your hand to evolve 1 of your Pokémon, count the number of your opponent's Benched Pokémon. You may search your deck for up to that number of Fire Energy cards and attach them to 1 of your Fire Pokémon. Shuffle your deck afterward.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Kindle",
			},
			effect: {
				en: "Discard an Energy card attached to Typhlosion ex and then discard an Energy card attached to the Defending Pokémon.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
