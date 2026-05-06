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
		cost: ["Colorless"],

		name: {
			en: "Union Gain",
			pt: "Conquista de União"
		},

		effect: {
			en: "Attach up to 2 {L} Energy cards from your discard pile to this Pokémon.",
			pt: "Ligue até 2 cartas de Energia {L} da sua pilha de descarte a este Pokémon."
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
