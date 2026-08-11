import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [447],
	set: Set,

	name: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'it-it': "Riolu",
		'pt-br': "Riolu",
		'de-de': "Riolu"
	},

	illustrator: "Taira Akitsu",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'en-us': "Low Kick",
			'fr-fr': "Balayage",
			'es-es': "Patada Baja",
			'it-it': "Colpo Basso",
			'pt-br': "Rasteira",
			'de-de': "Fußkick"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It's exceedingly energetic, with enough stamina to keep running all through the night. Taking it for walks can be a challenging experience.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691789,
				tcgplayer: 478199
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691789,
				tcgplayer: 478199
			}
		},
	],
}

export default card
