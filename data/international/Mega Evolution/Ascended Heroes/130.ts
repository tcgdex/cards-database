import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Galarian Zigzagoon",
		'fr-fr': "Zigzaton de Galar",
		'es-es': "Zigzagoon de Galar",
		'es-mx': "Zigzagoon de Galar",
		'de-de': "Galar-Zigzachs",
		'it-it': "Zigzagoon di Galar",
		'pt-br': "Zigzagoon de Galar"
	},

	illustrator: "osare",
	rarity: "Common",
	category: "Pokemon",
	dexId: [263],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'es-es': "Roer",
			'es-mx': "Mordisquear",
			'de-de': "Nagen",
			'it-it': "Rosicchiamento",
			'pt-br': "Roída"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "Its restlessness has it constantly running around. If it sees another Pokémon, it will purposely run into them in order to start a fight.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869741,
			tcgplayer: 675942
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870342,
			tcgplayer: 676955
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870341,
			tcgplayer: 677095
		}
	},
],
}

export default card
