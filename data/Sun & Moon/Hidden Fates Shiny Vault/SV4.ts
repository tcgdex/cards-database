import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Wimpod",
		fr: "Sovkipou",
		de: "Reißlaus"
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		767,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wimp Out",
				fr: "Escampette",
				de: "Reißaus"
			},
			effect: {
				en: "During your first turn, this Pokémon has no Retreat Cost.",
				fr: "Pendant votre premier tour, ce Pokémon n’a pas de Coût de Retraite.",
				de: "Während deines ersten Zuges hat dieses Pokémon keine Rückzugskosten."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				de: "Nagen"
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,




	description: {
		en: "This Pokémon is a coward. As it desperately dashes off, the flailing of its many legs leaves a sparkling clean path in its wake.",
		de: "Es ist so feige, dass es wild mit seinen vielen Füßen herumschlägt und verzweifelt davonläuft. Nach seiner Flucht glänzt der Boden herrlich."
	},
}

export default card
