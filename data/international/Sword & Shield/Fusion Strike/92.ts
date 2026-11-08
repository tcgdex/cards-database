import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [404],
	set: Set,

	name: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
		'es-es': "Shinx",
		'it-it': "Shinx",
		'pt-br': "Shinx",
		'de-de': "Sheinux"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Tika Matsuno",

	description: {
		'en-us': "Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes."
	},

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Electric Claws",
			'fr-fr': "Griffes Électriques",
			'de-de': "Elektrokrallen",
			'es-es': "Garras Eléctricas",
			'pt-br': "Garras Elétricas",
			'it-it': "Artigli Elettrici"
		},

		damage: 50
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582484,
				tcgplayer: 253248
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582484,
				tcgplayer: 253248
			}
		},
	],
}

export default card
