import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Vullaby",
		'fr-fr': "Vostourno",
		'es-es': "Vullaby",
		'es-mx': "Vullaby",
		'de-de': "Skallyk",
		'it-it': "Vullaby",
		'pt-br': "Vullaby"
	},

	illustrator: "Nisota Niso",
	rarity: "Common",
	category: "Pokemon",
	dexId: [629],
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Flap",
			'fr-fr': "Battement",
			'es-es': "Aleteo",
			'es-mx': "Aleteo",
			'de-de': "Flattern",
			'it-it': "Alabattito",
			'pt-br': "Asa"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",

	description: {
		'en-us': "Its healthy appetite leads to visible growth spurts. It often has to replace the bones it wears as its size increases.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869749,
			tcgplayer: 675950
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870354,
			tcgplayer: 676961
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870353,
			tcgplayer: 677101
		}
	},
],
}

export default card
