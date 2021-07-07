import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Seismitoad",
		fr: "Crapustule",
	},
	illustrator: "Kanako Eo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		537,
	],
	hp: 150,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Palpitoad",
		fr: "Batracné",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Siphon Off",
				fr: "Aspiration",
			},
			effect: {
				en: "Attach 3 Energy cards from your discard pile to this Pokémon.",
				fr: "Attachez 3 cartes Énergie de votre pile de défausse à ce Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Shaky Fall",
				fr: "Chute Précaire",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused. That Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Le Pokémon ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
