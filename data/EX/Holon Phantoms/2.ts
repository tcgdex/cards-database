import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Cradily δ",
		fr: "Vacilys δ",
		de: "Wielie"
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
		en: "Lileep",
		fr: "Lilia"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Harsh Fluid",
				fr: "Fluide corrosif",
				de: "Herbe Flüssigkeit"
			},
			effect: {
				en: "Put 5 damage counters on the Defending Pokémon at the end of your opponent's next turn.",
				fr: "Placez 5 marqueurs de dégât sur le Pokémon Défenseur à la fin du prochain tour de votre adversaire.",
				de: "Lege am Ende des nächsten Zuges deines Gegners 5 Schadensmarken auf das Verteidigende Pokémon."
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
				en: "Poison Tentacles",
				fr: "Tentacules empoisonnées",
				de: "Giftige Tentakel"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Das Verteidigende Pokémon ist jetzt vergiftet."
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
