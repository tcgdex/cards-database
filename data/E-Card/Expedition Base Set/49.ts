import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Golem",
		fr: "Grolem",
		de: "Geowaz"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [76],

	hp: 100,

	types: [
		"Fighting"
	],

	evolveFrom: {
		en: "Graveler",
		fr: "Gravalanch",
		de: "Georok"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rock Body",
				fr: "Corps roc",
				de: "Steinkörper"
			},
			effect: {
				en: "All damage done by attacks to Golem is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés par des attaques sur Grolem sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				de: "Aller Schaden, der Geowaz von Angriffen zugefügt wird, wird um 10 reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Tumble",
				fr: "Roule-pierre",
				de: "Rollende Felsen"
			},
			effect: {
				en: "Don't apply Resistance.",
				fr: "N'appliquez pas la Résistance.",
				de: "Wende Resistenz nicht an."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 4,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85824,
				cardmarket: 274889
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85824,
				cardmarket: 274889
			},
		},
	],
}

export default card
