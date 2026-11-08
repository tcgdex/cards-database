import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [198],
	set: Set,

	name: {
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
		'es-es': "Murkrow",
		'it-it': "Murkrow",
		'pt-br': "Murkrow",
		'de-de': "Kramurx"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'pt-br': "Bicada",
			'de-de': "Pikser"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Wing Attack",
			'fr-fr': "Cru-Ailes",
			'es-es': "Ataque Ala",
			'it-it': "Attacco d'Ala",
			'pt-br': "Ataque de Asa",
			'de-de': "Flügelschlag"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674127,
				tcgplayer: 284011
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674127,
				tcgplayer: 284011
			}
		},
	],
}

export default card
