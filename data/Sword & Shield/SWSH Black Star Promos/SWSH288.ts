import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [877],
	set: Set,
	illustrator: "Yuu Nishida",

	name: {
		fr: "Morpeko V-UNION",
		de: "Morpeko V-UNION",
		es: "Morpeko V-UNIÓN",
		pt: "Morpeko V-UNIÃO",
		it: "Morpeko V UNIONE",
		en: "Morpeko V-UNION"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "V-UNION",
	suffix: "V",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "All You Can Eat",
			pt: "Comilança"
		},

		effect: {
			en: "Draw cards until you have 10 cards in your hand.",
			pt: "Compre cartas até ter 10 cartas na sua mão."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E"
}

export default card
