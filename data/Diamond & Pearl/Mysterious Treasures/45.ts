import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Dewgong",
		fr: "Lamantine LV.36"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		87,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Seel",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cold Fat",
				fr: "Graisse froide"
			},
			effect: {
				en: "As long as Dewgong is Asleep, any damage done to Dewgong by attacks is reduced by 40 (after applying Weakness and Resistance).",
				fr: "Tant que Lamantine est Endormi, tous dégâts qui lui sont infligés par des attaques sont réduits de 40 (après application de la Faiblesse et de la Résistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Collapse",
				fr: "Effondrement"
			},
			effect: {
				en: "Dewgong is now Asleep.",
				fr: "Lamantine est maintenant Endormi."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	description: {
		fr: "Son corps est couvert d'un grand manteau blanc qui, dans la neige, le dissimule aux yeux des prédateurs."
	}
}

export default card
