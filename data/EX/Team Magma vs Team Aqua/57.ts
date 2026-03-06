import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Spheal",
		fr: "Obalie de Team Aqua",
		de: "Team Aquas Seemops"
	},

	illustrator: "Nakaoka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		363,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				de: "Rollout"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Aqua Trance",
				fr: "Aqua-transe",
				de: "Aqua Trance"
			},
			effect: {
				en: "At the end of your opponent's next turn, the Defending Pokémon is now Asleep.",
				fr: "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur est Endormi.",
				de: "At the end of your opponent's next turn, the Defending Pokémon is now Asleep."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276033,
		tcgplayer: 89802
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
