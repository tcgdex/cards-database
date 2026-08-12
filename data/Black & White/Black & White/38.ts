import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Alomomola",
		fr: "Mamanbo",
		es: "Alomomola",
		it: "Alomomola",
		pt: "Alomomola",
		de: "Mamolida"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		594,
	],

	hp: 100,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pound",
				fr: "Écras'Face",
				de: "Pfund"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
				de: "Wellenplatscher"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Floating in the open sea is how they live. When they find a wounded Pokémon, they embrace it and bring it to shore.",
		de: "Es treibt durch den Ozean. Findet es ein verletztes Pokémon, nimmt es dieses auf und trägt es zurück an Land."
	},

	thirdParty: {
		cardmarket: 279776,
		tcgplayer: 83505
	}
}

export default card
