import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Clawitzer BREAK",
		fr: "Gamblast TURBO",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		693,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Clawitzer",
		fr: "Gamblast",
	},
	stage: "BREAK",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lock-On",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn. During your next turn, any damage done to that Pokémon by attacks is increased by 120 (after applying Weakness and Resistance).",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Verrouillage",
			},
			effect: {
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire. Pendant votre prochain tour, tous les dégâts infligés au Pokémon par des attaques sont augmentés de 120 (après application de la Faiblesse et de la Résistance).",
			},

		},
	],






}

export default card
