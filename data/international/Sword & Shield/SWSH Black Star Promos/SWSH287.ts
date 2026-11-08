import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [877],
	set: Set,
	illustrator: "Yuu Nishida",

	name: {
		'fr-fr': "Morpeko V-UNION",
		'de-de': "Morpeko V-UNION",
		'es-es': "Morpeko V-UNIÓN",
		'pt-br': "Morpeko V-UNIÃO",
		'it-it': "Morpeko V UNIONE",
		'en-us': "Morpeko V-UNION"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],
	stage: "V-UNION",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Union Gain",
			'pt-br': "Conquista de União"
		},

		effect: {
			'en-us': "Attach up to 2 {L} Energy cards from your discard pile to this Pokémon.",
			'pt-br': "Ligue até 2 cartas de Energia {L} da sua pilha de descarte a este Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	variants: [
			{
				type: "holo",
			}
		],

	regulationMark: "E"
}

export default card
