import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'es-es': "Haunter",
		'es-mx': "Haunter",
		'de-de': "Alpollo",
		'it-it': "Haunter",
		'pt-br': "Haunter"
	},

	evolveFrom: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'es-mx': "Gastly",
		'de-de': "Nebulak",
		'it-it': "Gastly",
		'pt-br': "Gastly",
	},

	illustrator: "Rianti Hidayat",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [93],
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Spooky Shot",
			'fr-fr': "Tir Effrayant",
			'es-es': "Disparo Embrujado",
			'es-mx': "Disparo Espeluznante",
			'de-de': "Spukschuss",
			'it-it': "Colpomistero",
			'pt-br': "Tiro Assustador"
		},

		damage: 40
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
		'en-us': "It likes to lurk in the dark and tap shoulders with a gaseous hand. Its touch causes endless shuddering.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869735,
			tcgplayer: 675936
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870332,
			tcgplayer: 676950
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870331,
			tcgplayer: 677090
		}
	},
],
}

export default card
