import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Double Colorless Energy",
		fr: "Énergie doublement incolore",
		de: "Doppel-Farblos-Energie"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Uncommon",
	category: "Energy",
	set: Set,

	effect: {
		fr: "L’énergie doublement incolore fournit de l’énergie ColorlessColorless.",
		en: "Double Colorless Energy provides Colorless Colorless Energy",
		de: "Doppel-Farblos-Energie liefert -Energie."
	},

	energyType: "Special",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 371574,
				tcgplayer: 84883
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84883
			}
		},
		{
			type: "reverse",
			foil: 'league',
			thirdParty: {
				tcgplayer: 137281
			}
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"],
			thirdParty: {
				tcgplayer: 480028
			}
		},
		{
			type: "normal",
			stamp: ["yuta-komatsuda"],
			thirdParty: {
				tcgplayer: 480029
			}
		},
		{
			type: "normal",
			stamp: ["ross-cawthorn"],
			thirdParty: {
				tcgplayer: 480376
			}
		},
	],

	hp: 0,

	thirdParty: {
		cardmarket: 279075,
		tcgplayer: 84883
	}
	retreat: 0
}

export default card
