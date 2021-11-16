import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Carvanha",
		fr: "Carvanha de Team Aqua"
	},
	illustrator: "Mt. TBT",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		318,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark Lift",
				fr: "Sombre élévation"
			},
			effect: {
				en: "If Team Aqua's Carvanha has any Darkness Energy attached to it, the Retreat Cost for Team Aqua's Carvanha is 0.\"",
				fr: "Si Carvanha de Team Aqua possède des Énergies , son coût de retraite est de 0."
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
				en: "Slow-Acting Poison",
				fr: "Poison à effet retardé"
			},
			effect: {
				en: "At the end of your opponent's next turn, the Defending Pokémon is now Poisoned.",
				fr: "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur est Empoisonné."
			},
			damage: 20,

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
