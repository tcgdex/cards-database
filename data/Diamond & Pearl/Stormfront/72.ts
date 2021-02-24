import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Roselia",
		fr: "Roselia",
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		315,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		fr: "Roselia",
	},
	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Petal Spikes",
				fr: "Pétales-piques",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep and Poisoned. If Budew is anywhere under Roselia, the Defending Pokémon is now Asleep and Poisoned.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi et Empoisonné. Si Rozbouton se trouve sous Roselia, le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
			},
			damage: 20,

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
