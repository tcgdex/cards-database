import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Seadra",
		fr: "Hypocéan",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		117,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Horsea",
		fr: "Hypotrempe",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Smokescreen",
				fr: "Brouillard",
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
			},
			damage: 20,

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
