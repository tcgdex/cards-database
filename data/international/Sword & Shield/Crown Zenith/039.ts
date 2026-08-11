import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [403],
	set: Set,

	name: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
		'es-es': "Shinx",
		'it-it': "Shinx",
		'pt-br': "Shinx",
		'de-de': "Sheinux"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",


	description: {
		'en-us': "All of its fur dazzles if danger is sensed. It flees while the foe is momentarily blinded.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691756,
				tcgplayer: 478141
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691756,
				tcgplayer: 478141
			}
		},
	],
}

export default card
