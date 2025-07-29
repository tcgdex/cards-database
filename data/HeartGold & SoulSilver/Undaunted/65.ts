import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insecateur",
		de: "Sichlor"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		123,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cut",
				fr: "Coupe",
				de: "Zerschneider"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup déchirant",
				de: "Schlitzender Schlag"
			},
			effect: {
				en: "During your next turn, Scyther can’t use Slashing Strike.",
				fr: "Insécateur ne peut pas utiliser son Coup déchirant pendant votre prochain tour.",
				de: "Sichlor kann Schlitzender Schlag in deinem nächsten Zug nicht einsetzen."
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

	retreat: 1,

	description: {
		en: "It slashes through grass with its sharp scythes, moving too fast for the human eye to track."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279289
	}
}

export default card
