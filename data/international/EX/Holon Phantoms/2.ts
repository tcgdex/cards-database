import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Cradily δ",
		'fr-fr': "Vacilys δ",
		'de-de': "Wielie"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		346,
	],

	hp: 100,

	types: [
		"Darkness",
		"Metal",
	],

	evolveFrom: {
		'en-us': "Lileep",
		'fr-fr': "Lilia"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Harsh Fluid",
				'fr-fr': "Fluide corrosif",
				'de-de': "Herbe Flüssigkeit"
			},
			effect: {
				'en-us': "Put 5 damage counters on the Defending Pokémon at the end of your opponent's next turn.",
				'fr-fr': "Placez 5 marqueurs de dégât sur le Pokémon Défenseur à la fin du prochain tour de votre adversaire.",
				'de-de': "Lege am Ende des nächsten Zuges deines Gegners 5 Schadensmarken auf das Verteidigende Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Tentacles",
				'fr-fr': "Tentacules empoisonnées",
				'de-de': "Giftige Tentakel"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276972
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
	]
}

export default card
