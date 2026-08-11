import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [582],
	set: Set,

	name: {
		'en-us': "Vanillite",
		'fr-fr': "Sorbébé",
		'es-es': "Vanillite",
		'it-it': "Vanillite",
		'pt-br': "Vanillite",
		'de-de': "Gelatini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Chilly",
			'fr-fr': "Glacial",
			'es-es': "Fresquito",
			'it-it': "Addiaccio",
			'pt-br': "Frio",
			'de-de': "Frösteln"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Supposedly, this Pokémon was born from an icicle. It spews out freezing air at −58 degrees Fahrenheit to make itself more comfortable.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740519,
				tcgplayer: 523652,
				cardtrader: 265122
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740519,
				tcgplayer: 523652,
				cardtrader: 265122
			}
		},
	],

	illustrator: "miki kudo",

	
}

export default card
