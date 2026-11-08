import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [909],
	set: Set,

	name: {
		'en-us': "Fuecoco",
		'fr-fr': "Chochodile",
		'es-es': "Fuecoco",
		'it-it': "Fuecoco",
		'pt-br': "Fuecoco",
		'de-de': "Krokel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída",
			'de-de': "Nagen"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão",
			'de-de': "Glühen"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Akira Komayama",

	description: {
		'en-us': "Its flame sac is small, so energy is always leaking out. This energy is released from the dent atop Fuecoco's head and flickers to and fro.",
	},

	thirdParty: {
        cardmarket: 689764,
        tcgplayer: 475418
    }
}

export default card