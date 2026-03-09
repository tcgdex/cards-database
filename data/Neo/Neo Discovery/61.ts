import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Pineco",
		fr: "Pomdepik",
		de: "Tannza"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		204,
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
				en: "Burst",
				fr: "Explosion",
				de: "Burst"
			},

			effect: {
				en: "Flip a coin. If heads, Pineco does 40 damage to itself and 10 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If tails, this attack does nothing (not even damage).",
				fr: "Lancez une pièce. Si c'est face, Pomdepik s'inflige 40 dégâts et inflige 10 dégâts à chaque Pokémon du Banc de chaque joueur. (N'appliquez pas la Faiblesse et la Résistance pour les Pokémon du Banc.) Lancez une pièce. Si c'est face, cette attaque ne fait rien (pas même de dégâts).",
				de: "Flip a coin. If heads, Pineco does 40 damage to itself and 10 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Flip a coin. If tails, this attack does nothing (not even damage)."
			},

			damage: 40
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Il aime faire épaissir sa carapace en y ajoutant des couches d'écorce. Le poids supplémentaire ne le dérange pas."
	},

	thirdParty: {
		cardmarket: 274572,
		tcgplayer: 88122
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card

