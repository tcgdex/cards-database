import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Salazzle",
		fr: "Malamandre",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		758,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Salandit",
		fr: "Tritox",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Nasty Plot",
				fr: "Machination",
			},
			effect: {
				en: "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Severe Poison",
				fr: "Poison Violent",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Put 4 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 4 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
