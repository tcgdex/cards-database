import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
	},
	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		113,
	],
	hp: 100,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Healing Pirouette",
				fr: "Pirouette Apaisante",
			},
			effect: {
				en: "Heal 20 damage from each of your Pokémon.",
				fr: "Soignez 20 dégâts à chacun de vos Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sympathetic Slap",
				fr: "Gifle Cordiale",
			},
			effect: {
				en: "If your opponent's Active Pokémon already has any damage counters on it before this attack does damage, this attack does nothing.",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueur de dégâts avant que cette attaque n’inflige des dégâts, cette attaque ne fait rien.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
