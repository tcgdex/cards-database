import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Growlithe",
		fr: "Caninos",
		de: "Fukano"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [58],

	hp: 60,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ember",
				fr: "Flammèche",
				de: "Ember"
			},
			effect: {
				en: "Discard a Fire Energy card attached to Growlithe.",
				fr: "Défaussez-vous d'une carte Énergie  attachée à Caninos.",
				de: "Discard a  Energy card attached to Growlithe."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85949,
				cardmarket: 275124
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85949,
				cardmarket: 275124
			}
		},
	]
}

export default card
