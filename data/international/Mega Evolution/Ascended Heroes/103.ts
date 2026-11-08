import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'es-es': "Meditite",
		'es-mx': "Meditite",
		'de-de': "Meditie",
		'it-it': "Meditite",
		'pt-br': "Meditite"
	},

	illustrator: "Lee HyunJung",
	rarity: "Common",
	category: "Pokemon",
	dexId: [307],
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'es-es': "Coleccionar",
			'es-mx': "Recolectar",
			'de-de': "Sammeln",
			'it-it': "Tassa",
			'pt-br': "Coleta"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'es-mx': "Roba 1 carta.",
			'de-de': "Ziehe 1 Karte.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre uma carta."
		}
	}, {
		cost: ["Fighting"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'es-es': "Bofetada Gentil",
			'es-mx': "Cachetadita",
			'de-de': "Sanfter Hieb",
			'it-it': "Schiaffetto",
			'pt-br': "Tapinha"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869714,
			tcgplayer: 675915
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870302,
			tcgplayer: 676935
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870301,
			tcgplayer: 677075
		}
	},
],
}

export default card
