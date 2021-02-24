import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Altaria",
		fr: "Altaria",
	},
	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		334,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Swablu",
		fr: "Tylton",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Draco Melody",
				fr: "Mélodie Draconienne",
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a Dragon Pokémon and put it onto your Bench. Then, shuffle your deck.",
				fr: "Lancez une pièce. Si c'est face, cherchez un Pokémon Dragon dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cotton Guard",
				fr: "Cotogarde",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
