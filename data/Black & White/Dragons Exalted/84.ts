import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Altaria",
		fr: "Altaria",
	},
	illustrator: "HiRON",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		334,
	],
	hp: 70,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fight Song",
				fr: "Hymne au Combat",
			},
			effect: {
				en: "Your Dragon Pokémon's attacks do 20 more damage to the Active Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de vos Pokémon Dragon infligent 20 dégâts supplémentaires aux Pokémon Actifs (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Glide",
				fr: "Glissement",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
