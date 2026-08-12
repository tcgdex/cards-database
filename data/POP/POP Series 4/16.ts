import { Card } from '../../../interfaces'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké",
		de: "Woingenau"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [202],

	hp: 80,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nap",
				fr: "Tit'sieste",
				de: "Nickerchen"
			},
			effect: {
				en: "Remove 2 damage counters from Wobbuffet.",
				fr: "Retirez à Qulbutoké 2 marqueurs de dégât.",
				de: "Entferne 2 Schadensmarken von Woingenau."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Expand",
				fr: "Pousstoidla",
				de: "Ausdehnen"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Wobbuffet is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, les dégâts infligés à Qulbutoké sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Im nächsten Zug deines Gegners wird Schaden, der Woingenau zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90618,
				cardmarket: 277481
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90618,
				cardmarket: 277481
			},
		},
	],

}

export default card
