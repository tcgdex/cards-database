import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Galarian Linoone",
		'fr-fr': "Linéon de Galar",
		'es-es': "Linoone de Galar",
		'es-mx': "Linoone de Galar",
		'de-de': "Galar-Geradaks",
		'it-it': "Linoone di Galar",
		'pt-br': "Linoone de Galar"
	},

	evolveFrom: {
		'en-us': "Galarian Zigzagoon",
		'fr-fr': "Zigzaton de Galar",
		'es-es': "Zigzagoon de Galar",
		'es-mx': "Zigzagoon de Galar",
		'de-de': "Galar-Zigzachs",
		'it-it': "Zigzagoon di Galar",
		'pt-br': "Zigzagoon de Galar",
	},

	illustrator: "Tomowaka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [264],
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",

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

		damage: 20
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'es-es': "Cuchillada Garra",
			'es-mx': "Cuchillada con Garra",
			'de-de': "Klauenschlitzer",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	description: {
		'en-us': "It uses its long tongue to taunt opponents. Once the opposition is enraged, this Pokémon hurls itself at the opponent, tackling them forcefully.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869742,
			tcgplayer: 675943
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870344,
			tcgplayer: 676956
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870343,
			tcgplayer: 677096
		}
	},
],
}

export default card
