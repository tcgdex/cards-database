import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Corphish",
		fr: "Écrapince de Team Aqua"
	},
	illustrator: "Jungo Suzuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		341,
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
				en: "Slash",
				fr: "Tranche"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slow-Acting Poison",
				fr: "Poison à effet retardé"
			},
			effect: {
				en: "At the end of your opponent's next turn, the Defending Pokémon is now Poisoned.",
				fr: "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur est Empoisonné."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
