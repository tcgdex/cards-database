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

	hp: 0,

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84883,
				cardmarket: 279075
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84883,
				cardmarket: 279075
			}
		},
		{
			type: "reverse",
			foil: 'league',
			thirdParty: {
				cardmarket: 371574,
				tcgplayer: 137281,
			}
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"],
			thirdParty: {
				cardmarket: 868816,
				tcgplayer: 480028,
			}
		},
		{
			type: "normal",
			stamp: ["yuta-komatsuda"],
			thirdParty: {
				cardmarket: 868817,
				tcgplayer: 480029,
			}
		},
		{
			type: "normal",
			stamp: ["ross-cawthorn"],
			thirdParty: {
				cardmarket: 868220,
				tcgplayer: 480376,
			}
		},
		{
			type: "normal",
			stamp: ["chase-moloney"],
			thirdParty: {
				cardmarket: 868073,
			}
		},
		{
			type: "normal",
			stamp: ["igor-costa"],
			thirdParty: {
				cardmarket: 868074,
			}
		},
		{
			type: "normal",
			stamp: ["shuto-itagaki"],
			thirdParty: {
				cardmarket: 868075,
			}
		},
		{
			type: "normal",
			stamp: ["zachary-bokhari"],
			thirdParty: {
				cardmarket: 868077,
			}
		},
	],

}

export default card
