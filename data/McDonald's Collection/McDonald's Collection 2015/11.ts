import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2015'

const card: Card = {
	dexId: [
		263,
	],
	set: Set,
	name: {
		en: "Zigzagoon",
		fr: "Zigzaton",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Colorless",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sand Attack",
				fr: "Jet de Sable",
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, son attaque ne fait rien.",
			},
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'Boule",
			},
			damage: "20",
		},
	],

	illustrator: "Sumiyoshi Kizuki",
	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 293327,
				tcgplayer: 110423
			}
		}
	]
}

export default card

