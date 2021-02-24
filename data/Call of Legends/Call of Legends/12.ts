import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Kyogre",
		fr: "Kyogre",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		382,
	],
	hp: 100,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Destructive Tsunami",
				fr: "Tsunami destructeur",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage to each of your opponent's Pokémon. If tails, this attack does 40 damage to each of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts à chaque Pokémon de votre adversaire. Si c’est pile, cette attaque inflige 40 dégâts à chacun de vos Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
