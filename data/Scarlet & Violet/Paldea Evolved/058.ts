import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [996],
	set: Set,

	name: {
		fr: "Frigodo",
		en: "Frigibax",
		es: "Frigibax",
		it: "Frigibax",
		pt: "Frigibax",
		de: "Frospino"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			fr: "Glacial",
			en: "Chilly",
			es: "Fresquito",
			it: "Addiaccio",
			pt: "Frio",
			de: "Frösteln"
		},

		damage: 10
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			fr: "Morsure",
			en: "Bite",
			es: "Mordisco",
			it: "Morso",
			pt: "Mordida",
			de: "Biss"
		},

		damage: 50
	}],

	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715533,
				tcgplayer: 497469,
				cardtrader: 248669
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 785461
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715533,
				tcgplayer: 497469,
				cardtrader: 248669
			}
		},
	],

	illustrator: "AKIRA EGAWA",

	
}

export default card
