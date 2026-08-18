import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [532],
	set: Set,

	name: {
		en: "Timburr",
		fr: "Charpenti",
		es: "Timburr",
		it: "Timburr",
		pt: "Timburr",
		de: "Praktibalk"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Pound",
			fr: "Écras'Face",
			es: "Destructor",
			it: "Botta",
			pt: "Pancada",
			de: "Klaps"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		en: "Timburr that have started carrying logs that are about three times their size are nearly ready to evolve.",
		de: "Man sagt, seine Entwicklung stehe dann kurz bevor, wenn es einen Holzbalken heben kann, der dreimal so groß und schwer ist wie es selbst."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545481,
				tcgplayer: 234249
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545481,
				tcgplayer: 234249
			}
		},
	],
}

export default card
