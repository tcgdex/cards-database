import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Evoli Niv. 10",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		133,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Signs of Evolution",
				fr: "Signes d'evolution",
			},
			effect: {
				en: "Search your deck for up to 2 cards that evolve from Eevee, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck jusqu'à 2 cartes qui évoluent d'Evoli. Montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bounce",
				fr: "Faire des bonds",
			},
			effect: {
				en: "Switch Eevee with 1 of your Benched Pokémon.",
				fr: "Échangez Evoli avec 1 des Pokémon de votre Banc.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
