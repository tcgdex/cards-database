import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [915],
	set: Set,

	name: {
		'fr-fr': "Gourmelet",
		'en-us': "Lechonk",
		'es-es': "Lechonk",
		'it-it': "Lechonk",
		'pt-br': "Lechonk",
		'de-de': "Ferkuli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

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
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Tir de Boue",
			'en-us': "Mud Shot",
			'es-es': "Disparo Lodo",
			'it-it': "Colpodifango",
			'pt-br': "Tiro de Lama",
			'de-de': "Lehmschuss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It searches for food all day. It possesses a keen sense of smell but doesn't use it for anything other than foraging.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725262,
				tcgplayer: 509766,
				cardtrader: 256078
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725262,
				tcgplayer: 509766,
				cardtrader: 256078
			}
		},
	],

	illustrator: "Atsuko Nishida",

	
}

export default card
