import { Card } from 'models/database/card'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		'en-us': "Latias",
		'fr-fr': "Latias"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [380],

	hp: 80,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Miraculous Light",
				'fr-fr': "Lumière miraculeuse"
			},
			effect: {
				'en-us': "Remove 2 damage counters and all Special Conditions from Latias.",
				'fr-fr': "Retirez à Latias 2 marqueurs de dégât ainsi que tous ses États Spéciaux."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Mist Ball",
				'fr-fr': "Boule de brume"
			},
			effect: {
				'en-us': "Discard a Fire and a Water Energy attached to Latias.",
				'fr-fr': "Défaussez une Énergie  et une Énergie  attachée à Latias."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	description: {
		'en-us': "Its body is covered with a down that can refract light in such a way that it becomes invisble.",
		'fr-fr': "Son corps est recouvert d'un duvet qui reflète la lumière et le rend invisible."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86652,
				cardmarket: 278035
			},
		},
		{
			type: "holo",
			foil: 'cosmos',
			thirdParty: {
				tcgplayer: 86652,
				cardmarket: 278035
			},
		},
	],

}

export default card
