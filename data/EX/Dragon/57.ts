import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Grimer",
		fr: "Tadmorv",
		de: "Sleima"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [88],

	hp: 50,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras'face",
				de: "Pfund"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Poison Spurt",
				fr: "Jet de poison",
				de: "Giftspritzer"
			},
			effect: {
				en: "Discard a Grass Energy card attached to Grimer. The Defending Pokémon is now Poisoned.",
				fr: "Défaussez une carte Énergie  attachée à Tadmorv. Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Entferne 1 {G}-Energiekarte von Sleima und lege sie auf den Ablagestapel. Das Verteidigende Pokémon ist jetzt vergiftet."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85908,
				cardmarket: 275934
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85908,
				cardmarket: 275934
			},
		},
	],

}

export default card
