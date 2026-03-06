import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Snom",
		fr: "Frissonille",
		es: "Snom",
		'es-mx': "Snom",
		de: "Snomnom",
		it: "Snom",
		pt: "Snom"
	},

	illustrator: "Izucch",
	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Icicle",
			fr: "Concrétion Glacée",
			es: "Témpano",
			'es-mx': "Témpano de Hielo",
			de: "Eiszapfen",
			it: "Stalattite",
			pt: "Pingente de Gelo"
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675864,
		cardmarket: 869663
	}
}

export default card