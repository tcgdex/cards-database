import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Seadra",
		fr: "Pichu",
		de: "Pichu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [117],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Stage1",

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],,
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Wave Splash",
				fr: "Rajout d'énergie",
				de: "Energieflicken"
			},
			effect: {
				en: "Take an Energy card attached to one of your Pokémon and attach it to another of your Pokémon.",
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
