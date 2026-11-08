import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [597],
	set: Set,

	name: {
		'en-us': "Ferroseed",
		'fr-fr': "Grindur",
		'es-es': "Ferroseed",
		'it-it': "Ferroseed",
		'pt-br': "Ferroseed",
		'de-de': "Kastadur"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'en-us': "Spike Sting",
			'fr-fr': "Pic Piquant",
			'es-es': "Picotazo Púas",
			'it-it': "Aculeopuntura",
			'pt-br': "Ferroada de Espinhos",
			'de-de': "Stachelstich"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Mossy caves are their preferred dwellings. Enzymes contained in mosses help Ferroseed's spikes grow big and strong.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740664,
				tcgplayer: 523804,
				cardtrader: 265243
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740664,
				tcgplayer: 523804,
				cardtrader: 265243
			}
		},
	],

	illustrator: "Miki Tanaka",

	
}

export default card
