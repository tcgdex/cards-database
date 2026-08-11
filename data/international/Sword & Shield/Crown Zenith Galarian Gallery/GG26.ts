import { Card } from "models/database/card"
import Set from "../Crown Zenith Galarian Gallery"

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

	illustrator: "Kouki Saitou",
	rarity: "Rare",
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
			type: 'holo',
			thirdParty: {
				cardmarket: 691905,
				tcgplayer: 478045
			}
		},
	],
}

export default card
