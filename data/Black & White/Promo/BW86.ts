import { Card } from '../../../interfaces'
import Set from '../Promo'

const card: Card = {
	name: {
		en: "Genesect",
		fr: "Genesect",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		649,
	],
	hp: 100,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Signal Beam",
				fr: "Rayon Signal",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Overdrive Smash",
				fr: "Boost Atomisant",
			},
			effect: {
				en: "During your next turn, this Pokémon's Overdrive Smash attack does 60 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l'attaque Boost Atomisant de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
