import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [278],
	set: Set,

	name: {
		fr: "Goélise",
		en: "Wingull",
		es: "Wingull",
		it: "Wingull",
		pt: "Wingull",
		de: "Wingull"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Tornade",
			en: "Gust",
			es: "Tornado",
			it: "Raffica",
			pt: "Lufada de Vento",
			de: "Windstoß"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715633,
				tcgplayer: 497576,
				cardtrader: 248804
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715633,
				tcgplayer: 497576,
				cardtrader: 248804
			}
		},
	],

	illustrator: "Kouki Saitou",

	
}

export default card
