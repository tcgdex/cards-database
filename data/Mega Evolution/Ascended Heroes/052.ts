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

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869663,
			tcgplayer: 675864
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870219,
			tcgplayer: 676894
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870220,
			tcgplayer: 677034
		}
	},
],
}

export default card
