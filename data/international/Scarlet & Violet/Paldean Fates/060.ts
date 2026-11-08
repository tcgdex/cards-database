import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [559],
	set: Set,

	name: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane",
		'es-es': "Scraggy",
		'it-it': "Scraggy",
		'pt-br': "Scraggy",
		'de-de': "Zurrokex"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Low Kick",
			'fr-fr': "Balayage",
			'es-es': "Patada Baja",
			'it-it': "Colpo Basso",
			'pt-br': "Rasteira",
			'de-de': "Fußkick"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Headstrike",
			'fr-fr': "Coup de Tête",
			'es-es': "Testarada",
			'it-it': "Testata",
			'pt-br': "Golpe de Cabeça",
			'de-de': "Kopftreffer"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751598,
				tcgplayer: 534422,
				cardtrader: 274244
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751598,
				tcgplayer: 534422,
				cardtrader: 274244
			}
		},
	],

	illustrator: "sowsow",

	description: {
		'en-us': "It protects itself with its durable skin. It's thought that this Pokémon will evolve once its skin has completely stretched out.",
	},

}

export default card
