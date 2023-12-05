import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Weedle",
		fr: "Aspicot",
		de: "Hornliu"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		13,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Sting",
				fr: "Dard-Venin",
				de: "Giftstachel"
			},
			effect: {
				en: "Flip a coin. If heads, Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon vergiftet."
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

	description: {
		fr: "Il se nourrit de feuilles dans les forêts. L'aiguillon sur son front est empoisonné."
	}
}

export default card
