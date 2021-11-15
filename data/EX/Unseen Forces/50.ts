import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Yanma",
		fr: "Yanma"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		193,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Grand Loop",
				fr: "Grande boucle"
			},
			effect: {
				en: "Draw 2 cards. You may switch Yanma with 1 of your Benched Pokémon.",
				fr: "Piochez 2 cartes. Vous pouvez échanger Yanma avec 1 des Pokémon de votre Banc."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Spinning Tail",
				fr: "Queue tournante"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
