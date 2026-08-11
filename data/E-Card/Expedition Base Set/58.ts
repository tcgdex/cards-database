import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Pichu",
		fr: "Pichu",
		de: "Pichu"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [172],

	hp: 30,

	types: [
		"Lightning"
	],

	stage: "Baby",

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energy Patch",
				fr: "Rajout d'énergie",
				de: "Energieflicken"
			},
			effect: {
				en: "Take a basic Energy card attached to 1 of your Pokémon and attach it to another of your Pokémon.",
				fr: "Prenez une carte Énergie de base attachée à l'un de vos Pokémon et attachez-la à un autre de vos Pokémon.",
				de: "Nimm eine Basis-Energiekarte, die an 1 deiner Pokémon angelegt ist, und lege sie an ein anderes deiner Pokémon an."
			},

		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88015,
				cardmarket: 274897
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88015,
				cardmarket: 274897
			},
		},
		{
			type: "normal",
			subtype: "japanese-back"
		}
	],
}

export default card
