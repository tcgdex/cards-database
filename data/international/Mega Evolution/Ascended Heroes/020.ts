import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'es-mx': "Charmander",
		'de-de': "Glumanda",
		'it-it': "Charmander",
		'pt-br': "Charmander"
	},

	illustrator: "Orca",
	rarity: "Common",
	category: "Pokemon",
	dexId: [4],
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Fire Claws",
			'fr-fr': "Griffes Enflammées",
			'es-es': "Garras de Fuego",
			'es-mx': "Garras de Fuego",
			'de-de': "Feuerkrallen",
			'it-it': "Artigli Infuocati",
			'pt-br': "Garras de Fogo"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	description: {
		'en-us': "The flame on its tail indicates Charmander’s life force. If it is healthy, the flame burns brightly.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869631,
			tcgplayer: 675832
		}
	},
	{
		type: "reverse",
		foil: "friendball",
		thirdParty: {
			cardmarket: 870170,
			tcgplayer: 676869
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870169,
			tcgplayer: 677009
		}
	},
	{
		type: "holo",
		foil: "cosmos",
		thirdParty: {
			cardmarket: 870111,
			tcgplayer: 677398
		}
	},
],
}

export default card
