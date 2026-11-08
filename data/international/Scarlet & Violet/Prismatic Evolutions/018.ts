import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [79],
	set: Set,

	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'es-es': "Slowpoke",
		'pt-br': "Slowpoke",
		'it-it': "Slowpoke",
		'de-de': "Flegmon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'pt-br': "Revólver d'Água",
			'it-it': "Pistolacqua",
			'de-de': "Aquaknarre"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Tail Whap",
			'fr-fr': "Queue Battoir",
			'es-es': "Coletón",
			'pt-br': "Surra de Cauda",
			'it-it': "Codabotta",
			'de-de': "Schweifvertrimmer"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",
	illustrator: "Natsumi Yoshida",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805407,
				tcgplayer: 610373
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805407,
				tcgplayer: 610373
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806432,
				tcgplayer: 610548
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806433,
				tcgplayer: 610649
			}
		},
	],
}

export default card
