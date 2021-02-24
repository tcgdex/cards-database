import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Grovyle",
		fr: "Massko",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		253,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Treecko",
		fr: "Arcko",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Greenness",
				fr: "Verdure",
			},
			effect: {
				en: "Search your deck for up to 2 Grass Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 cartes Énergie Grass, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Poison Breath",
				fr: "Haleine empoisonnée",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
