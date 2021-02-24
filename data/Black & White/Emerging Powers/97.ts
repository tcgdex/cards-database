import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Thundurus",
		fr: "Fulguris",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		642,
	],
	hp: 110,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Charge",
				fr: "Chargeur",
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie Lightning dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Disaster Volt",
				fr: "Éclair Désastre",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
