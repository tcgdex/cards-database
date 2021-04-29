import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		fr: "Victini",
	},
	illustrator: "Nagimiso",
	rarity: "Common",
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
				fr: "V de Victoire",
			},
			effect: {
				fr: "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base de diffférents types et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite cotre deck.",
			},

		},
		{
			cost: [
				"Fire",
			],
			name: {
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
