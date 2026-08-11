import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'es-mx': "Gastly",
		'de-de': "Nebulak",
		'it-it': "Gastly",
		'pt-br': "Gastly"
	},

	illustrator: "Saboteri",
	rarity: "Common",
	category: "Pokemon",
	dexId: [92],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Petty Grudge",
			'fr-fr': "Rancune Mesquine",
			'es-es': "Rencor Ruin",
			'es-mx': "Rencor Ruin",
			'de-de': "Mini-Groll",
			'it-it': "Rancormeschino",
			'pt-br': "Rancinho"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "It wraps its opponent in its gas-like body, slowly weakening its prey by poisoning it through the skin.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869734,
			tcgplayer: 675935
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870330,
			tcgplayer: 676949
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870329,
			tcgplayer: 677089
		}
	},
	{
		type: "holo",
		foil: "cosmos",
		thirdParty: {
			cardmarket: 870110,
			tcgplayer: 677399
		}
	},
],
}

export default card
