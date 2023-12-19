import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Glameow",
		fr: "Chaglam",
		de: "Charmian"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	dexId: [
		431,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	effect: {
		en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
		fr: "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
	},

	attacks: [{
		name: {
			de: "Familienruf"
		},

		effect: {
			de: "Durchsuche dein Deck nach 1 Basis-Pokémon-Karte und lege sie auf diene Bank. Mische dein Deck danach."
		},

		cost: ["Colorless"]
	}, {
		name: {
			de: "Reißklaue"
		},

		damage: 10,

		effect: {
			de: "Wirf 1 Münze. Bei 'Kopf' entferne 1 Energie, die an das Verteidigende Pokémon angelegt ist, und lege sie auf den Ablagestapel deines Gegners."
		},

		cost: ["Colorless", "Colorless"]
	}]
}

export default card
