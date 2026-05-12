import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [965],
	set: Set,

	name: {
		fr: "Vrombi",
		en: "Varoom",
		es: "Varoom",
		it: "Varoom",
		pt: "Varoom",
		de: "Knattox"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			fr: "Pioche Tournante",
			en: "Spinning Draw",
			es: "Robo Giratorio",
			it: "Pesca Rotante",
			pt: "Compra Giratória",
			de: "Drehender Zug"
		},

		effect: {
			fr: "Piochez une carte.",
			en: "Draw a card.",
			es: "Roba 1 carta.",
			it: "Pesca una carta.",
			pt: "Compre uma carta.",
			de: "Ziehe 1 Karte."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725234,
				tcgplayer: 509941,
				cardtrader: 255839
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725234,
				tcgplayer: 509941,
				cardtrader: 255839
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card
