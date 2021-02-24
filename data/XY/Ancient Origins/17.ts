import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Volcarona",
		fr: "Pyrax",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		637,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Solar Birth",
				fr: "Naissance Solaire",
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, search your deck for up to 2 basic Energy cards and attach them to that Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez un Pokémon de base dans votre deck et placez-le sur votre Banc. Ensuite, cherchez jusqu'à 2 cartes Énergie de base dans votre deck et attachez-les au Pokémon choisi. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
