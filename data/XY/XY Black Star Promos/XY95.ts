import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	illustrator: "Kanako Eo",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Let's Eat Together",
				fr: "Bon Appétit",
			},
			effect: {
				en: "Heal 30 damage from both Active Pokémon.",
				fr: "Soignez 30 dégâts aux deux Pokémon Actifs.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-Attaque"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 289809
	}
}

export default card
