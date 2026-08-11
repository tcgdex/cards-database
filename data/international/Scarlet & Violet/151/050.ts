import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [50],
	set: Set,

	name: {
		'fr-fr': "Taupiqueur",
		'en-us': "Diglett",
		'es-es': "Diglett",
		'it-it': "Diglett",
		'pt-br': "Diglett",
		'de-de': "Digda"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Culbute Surprise",
			'en-us': "Headbutt Bounce",
			'es-es': "Bote Cabezazo",
			'it-it': "Rimbalzo Bottintesta",
			'pt-br': "Cabeçada Ricochete",
			'de-de': "Abrupter Kopfstoß"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'fr-fr': "Coud'Boue",
			'en-us': "Mud-Slap",
			'es-es': "Bofetón Lodo",
			'it-it': "Fangosberla",
			'pt-br': "Tapa de Lama",
			'de-de': "Lehmschelle"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It lives about one yard underground, where it feeds on plant roots. It sometimes appears aboveground.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733645,
				tcgplayer: 516215,
				cardtrader: 261108
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733645,
				tcgplayer: 516215,
				cardtrader: 261108
			}
		},
	],

	illustrator: "Miki Tanaka",

	
}

export default card
