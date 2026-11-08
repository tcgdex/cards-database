import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [491],
	set: Set,

	name: {
		'en-us': "Darkrai ex",
		'fr-fr': "Darkrai-ex",
		'es-es': "Darkrai ex",
		'it-it': "Darkrai-ex",
		'pt-br': "Darkrai ex",
		'de-de': "Darkrai-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Wind of Darkness",
			'fr-fr': "Vent Obscur",
			'es-es': "Viento de Oscuridad",
			'it-it': "Vento dell'Oscurità",
			'pt-br': "Vento da Escuridão",
			'de-de': "Wind der Finsternis"
		},

		damage: 40
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Night Impact",
			'fr-fr': "Impact Nocturne",
			'es-es': "Impacto Nocturno",
			'it-it': "Impatto Notturno",
			'pt-br': "Impacto Noturno",
			'de-de': "Nachteinschlag"
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	suffix: "ex",
	illustrator: "5ban Graphics",
	variants: [
		{
			type: "holo"
		}
	],
}

export default card
