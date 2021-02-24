import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Sealeo",
		fr: "Phogleur Niv. 31",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		364,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Spheal",
		fr: "Obalie",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Find Ice",
				fr: "Trouver de la glace",
			},
			effect: {
				en: "Search your deck for up to 2 Water Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck 2 cartes Énergie Water, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Sheer Cold",
				fr: "Glaciation",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur ne peut pas attaquer lors du prochain tour de votre adversaire.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
