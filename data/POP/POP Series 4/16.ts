import { Card } from '../../../interfaces'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		en: "Wobbuffet",
		fr: "Qulbutoké"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		202,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nap",
				fr: "Tit'sieste"
			},
			effect: {
				en: "Remove 2 damage counters from Wobbuffet.",
				fr: "Retirez à Qulbutoké 2 marqueurs de dégât."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Expand",
				fr: "Pousstoidla"
			},
			effect: {
				en: "During your opponent’s next turn, any damage done to Wobbuffet is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, les dégâts infligés à Qulbutoké sont réduits de 20 (après application de la Faiblesse et de la Résistance)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic"
		},
	],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277481
	}
}

export default card
