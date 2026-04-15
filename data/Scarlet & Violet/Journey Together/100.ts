import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	dexId: [920],
	set: Set,

	name: {
		en: "Lokix",
		fr: "Gambex",
		es: "Lokix",
		de: "Lextremo",
		it: "Lokix",
		pt: "Lokix",
		'es-mx': "Lokix"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		en: "Nymble",
		fr: "Lilliterelle",
		es: "Nymble",
		de: "Micrick",
		it: "Nymble",
		pt: "Nymble",
		'es-mx': "Nymble"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Low Sweep",
			fr: "Balayette",
			es: "Puntapié",
			de: "Fußtritt",
			it: "Calciobasso",
			pt: "Movimento Baixo",
			'es-mx': "Barredora"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "H",
	illustrator: "AKIRA EGAWA",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817252,
				tcgplayer: 623527
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817252,
				tcgplayer: 623527
			}
		},
	],
}

export default card
