import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Gligar",
		fr: "Scorplane"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		207,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],

			name: {
				en: "Poison Sting",
				fr: "Dard-venin"
			},

			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné."
			},

			damage: 10
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Il vole droit sur le visage de sa cible, et s'accroche ensuite à sa victime effrayée pour lui injecter du poison."
	}
}

export default card
