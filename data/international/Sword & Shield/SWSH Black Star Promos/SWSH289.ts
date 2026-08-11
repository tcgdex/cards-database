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
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Burst Wheel",
			'pt-br': "Roda Explosiva"
		},

		effect: {
			'en-us': "Discard all Energy from this Pokémon. This attack does 100 damage for each card you discarded in this way.",
			'pt-br': "Descarte todas as Energias deste Pokémon. Este ataque causa 100 pontos de dano para cada carta descartada desta forma."
		},

		damage: "100×"
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
