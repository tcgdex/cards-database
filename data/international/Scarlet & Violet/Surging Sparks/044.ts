import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [364],
	set: Set,

	name: {
		'en-us': "Sealeo",
		'fr-fr': "Phogleur",
		'es-es': "Sealeo",
		'it-it': "Sealeo",
		'pt-br': "Sealeo",
		'de-de': "Seejong"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Spheal",
		'fr-fr': "Obalie",
		'es-es': "Spheal",
		'it-it': "Spheal",
		'pt-br': "Spheal",
		'de-de': "Seemops"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Lunge Out",
			'fr-fr': "Allonger",
			'es-es': "Arremeter",
			'it-it': "Affondo Lungo",
			'pt-br': "Bote",
			'de-de': "Sprungangriff"
		},

		damage: 30
	}, {
		cost: ["Water", "Water"],

		name: {
			'en-us': "Ice Ball",
			'fr-fr': "Ball'Glace",
			'es-es': "Bola Hielo",
			'it-it': "Palla Gelo",
			'pt-br': "Bola de Gelo",
			'de-de': "Frostbeule"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794310,
				tcgplayer: 590043
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794310,
				tcgplayer: 590043
			}
		},
	],

	illustrator: "Mina Nakai",
}

export default card
