import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [448],
	set: Set,

	name: {
		'en-us': "Lucario ex",
		'fr-fr': "Lucario-ex",
		'es-es': "Lucario ex",
		'it-it': "Lucario-ex",
		'pt-br': "Lucario ex",
		'de-de': "Lucario-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'it-it': "Riolu",
		'pt-br': "Riolu",
		'de-de': "Riolu"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Low Kick",
			'fr-fr': "Balayage",
			'es-es': "Patada Baja",
			'it-it': "Colpo Basso",
			'pt-br': "Rasteira",
			'de-de': "Fußkick"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Aura Knuckle",
			'fr-fr': "Poing Aura",
			'es-es': "Nudillo Aural",
			'it-it': "Aurapugno",
			'pt-br': "Punho de Aura",
			'de-de': "Aurafaust"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 785936,
				tcgplayer: 567308
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Igarashi",

}

export default card
