import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Electivire",
		fr: "Élekable",
	},
	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		466,
	],
	hp: 140,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Electrocharge",
				fr: "Électrocharge",
			},
			effect: {
				en: "Search your deck for up to 2 Lightning Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 cartes Énergie Lightning dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "High-Voltage Knuckle",
				fr: "Poing Haute Tension",
			},
			effect: {
				en: "Discard 3 Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies de ce Pokémon.",
			},
			damage: 190,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
