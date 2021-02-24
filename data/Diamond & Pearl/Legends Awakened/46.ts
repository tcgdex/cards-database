import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Anorith",
		fr: "Anorith",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		347,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Claw Fossil",
		fr: "Klauenfossil",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Guard Claw",
				fr: "Griffe de garde",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Anorith by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Anorith par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "X-Scissor",
				fr: "Plaie-Croix",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
