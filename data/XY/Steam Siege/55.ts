import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Probopass",
		fr: "Tarinorme",
	},
	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		476,
	],
	hp: 120,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Nosepass",
		fr: "Tarinor",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Bounce Back",
				fr: "Retour à l’Envoyeur",
			},
			effect: {
				en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rock Tomb",
				fr: "Tomberoche",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
