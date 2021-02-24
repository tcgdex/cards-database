import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
	},
	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		442,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "B Cancel",
				fr: "Interruption B",
			},
			effect: {
				en: "Your opponent can't play any Pokémon from his or her hand to evolve the Defending Pokémon during his or her next turn.",
				fr: "Votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer le Pokémon Défenseur pendant son prochain tour.",
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde Folie",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 30,

		},
	],


	retreat: 1,



}

export default card
