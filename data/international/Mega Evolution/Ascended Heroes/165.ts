import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Skitty",
		'fr-fr': "Skitty",
		'es-es': "Skitty",
		'es-mx': "Skitty",
		'de-de': "Eneco",
		'it-it': "Skitty",
		'pt-br': "Skitty"
	},

	illustrator: "Yoko Hishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [300],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Cat Kick",
			'fr-fr': "Coup d'Patte",
			'es-es': "Patada Gato",
			'es-mx': "Patada Gatuna",
			'de-de': "Katzenkick",
			'it-it': "Calciogatto",
			'pt-br': "Chute do Gato"
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
	regulationMark: "J",

	description: {
		'en-us': "It can’t stop itself from chasing moving things, and it runs in a circle, chasing its own tail.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869776,
			tcgplayer: 675977
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870392,
			tcgplayer: 676980
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870391,
			tcgplayer: 677120
		}
	},
],
}

export default card
