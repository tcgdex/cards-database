import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Charizard EX",
		fr: "Dracaufeu EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 180,
	types: [
		"Fire",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stoke",
				fr: "Attisement",
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for up to 3 basic Energy cards and attach them to this Pokémon. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, cherchez jusqu'à 3 cartes Énergie de base dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire Blast",
				fr: "Déflagration",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
