import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Masquerain",
		fr: "Maskadra",
		de: "Maskeregen"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		284,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sweet Scent",
				fr: "Doux parfum",
				de: "Lockduft"
			},
			effect: {
				en: "Remove 2 damage counters from 1 of your Pokémon.",
				fr: "Retirer 2 marqueurs de dégât à 1 de vos Pokémon.",
				de: "Entferne 2 Schadensmarken von 1 deiner Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-attaque",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 277017,
		tcgplayer: 87247
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
