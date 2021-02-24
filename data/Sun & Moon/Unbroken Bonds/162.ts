import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Chatot",
		fr: "Pijako",
	},
	illustrator: "HYOGONOSUKE",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		441,
	],
	hp: 70,
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
				en: "Mimic",
				fr: "Copie",
			},
			effect: {
				en: "Shuffle your hand into your deck. Then, draw a card for each card in your opponent's hand.",
				fr: "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque carte dans la main de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tone-Deaf",
				fr: "Dur d’Oreille",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 10,

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
