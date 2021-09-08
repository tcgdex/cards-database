import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Psyduck",
		fr: "Psykokwak",
	},
	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		54,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Tripping Headbutt",
				fr: "Coup d’boule agile",
			},
			effect: {
				en: "Filp a coin. If heads, this attack does 30 damage to 1 of your opponent's Pokémon. If tails, this attack does 30 damage to 1 of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. Si c’est pile, cette attaque inflige 30 dégâts à l’un de vos Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
