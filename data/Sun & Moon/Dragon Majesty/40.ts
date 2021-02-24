import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Altaria",
		fr: "Altaria",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		334,
	],
	hp: 80,
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
				en: "Your Dragon Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de vos Pokémon Dragon infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pierce",
				fr: "Transpercement",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
