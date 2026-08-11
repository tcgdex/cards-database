import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [582],
	set: Set,

	name: {
		en: "Vanillite",
		fr: "Sorbébé",
		es: "Vanillite",
		it: "Vanillite",
		pt: "Vanillite",
		de: "Gelatini"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Chilly",
			fr: "Glacial",
			es: "Fresquito",
			it: "Addiaccio",
			pt: "Frio",
			de: "Frösteln"
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
		en: "Supposedly, this Pokémon was born from an icicle. It spews out freezing air at −58 degrees Fahrenheit to make itself more comfortable.",
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
