import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Aqua's Carvanha",
		fr: "Carvanha de Team Aqua",
		de: "Team Aquas Kanivanha"
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
				fr: "Sombre élévation",
				de: "Dark Lift"
			},
			effect: {
				en: "If Team Aqua's Carvanha has any Darkness Energy attached to it, the Retreat Cost for Team Aqua's Carvanha is 0.\"",
				fr: "Si Carvanha de Team Aqua possède des Énergies , son coût de retraite est de 0.",
				de: "If Team Aqua's Carvanha has any  Energy attached to it, the Retreat Cost for Team Aqua's Carvanha is 0."
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
				fr: "Poison à effet retardé",
				de: "Slow-Acting Poison"
			},
			effect: {
				en: "At the end of your opponent's next turn, the Defending Pokémon is now Poisoned.",
				fr: "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur est Empoisonné.",
				de: "At the end of your opponent's next turn, the Defending Pokémon is now Poisoned."
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

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276002,
		tcgplayer: 89776
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
