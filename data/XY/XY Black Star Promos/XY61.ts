import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Flygon EX",
		fr: "Libégon EX",
	},
	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 170,
	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Voice of the Sands",
				fr: "Voix du Désert",
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Spiral Buzz",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
