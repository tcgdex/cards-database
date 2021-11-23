import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Metapod",
		fr: "Chrysacier"
	},
	illustrator: "Yuichi Sawayama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		11,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Caterpie",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Exoskeleton",
				fr: "Exosquelette"
			},
			effect: {
				en: "All damage done to Metapod is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés par des attaques sur Chrysacier sont réduits de 20 (après application de la Faiblesse et de la Résistance)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
