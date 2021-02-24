import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Roselia",
		fr: "Roselia",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		315,
	],
	hp: 70,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Toxic Spikes",
				fr: "Pics Toxik",
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. If Roselia is evolved from Budew, this attack does 10 damage to the Defending Pokémon.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Si Roselia évolue de Rozbouton,  cette attaque inflige 10 dégâts au Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Sweet Spike",
				fr: "Douce pointe",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep. Remove 2 damage counters from 1 of your Pokémon.",
				fr: "Le Pokémon Défenseur est maintenant Endormi. Retirez à 1 de vos Pokémon 2 marqueurs de dégât.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
