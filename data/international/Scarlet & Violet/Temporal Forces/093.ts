import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [837],
	set: Set,

	name: {
		'en-us': "Rolycoly",
		'fr-fr': "Charbi",
		'es-es': "Rolycoly",
		'it-it': "Rolycoly",
		'pt-br': "Rolycoly",
		'de-de': "Klonkett"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'it-it': "Rollazione",
			'pt-br': "Golpe de Colisão Rolante",
			'de-de': "Rolltackle"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Power Gem",
			'fr-fr': "Rayon Gemme",
			'es-es': "Joya de Luz",
			'it-it': "Gemmoforza",
			'pt-br': "Gema Poderosa",
			'de-de': "Juwelenkraft"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "On sunny days, Rolycoly will come out onto grassy plains and roll around. Then it will eat the grass that gets tangled in its wheel-like leg.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760723,
				tcgplayer: 542837
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760723,
				tcgplayer: 542837
			}
		},
	],

	illustrator: "Aya Kusube",

}

export default card