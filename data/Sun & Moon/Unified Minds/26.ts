import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Victini",
		fr: "Victini",
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		494,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Victory Sign",
				fr: "V de Victoire",
			},
			effect: {
				en: "Search your deck for up to 2 basic Energy cards of different types and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 2 cartes Énergie de base de différents types et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flare",
				fr: "Flamboiement",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
