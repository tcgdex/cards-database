import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [554],
	set: Set,

	name: {
		'en-us': "N's Darumaka",
		'fr-fr': "Darumarond de N",
		'es-es': "Darumaka de N",
		'de-de': "Ns Flampion",
		'it-it': "Darumaka di N",
		'pt-br': "Darumaka do N",
		'es-mx': "Darumaka de N"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rolling Tackle",
			'fr-fr': "Roulé-Boulé",
			'es-es': "Placaje Giro",
			'de-de': "Rolltackle",
			'it-it': "Rollazione",
			'pt-br': "Golpe de Colisão Rolante",
			'es-mx': "Tacleada Rodante"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'es-es': "Llama",
			'de-de': "Flackern",
			'it-it': "Fiammata",
			'pt-br': "Chama",
			'es-mx': "Llama"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",
	illustrator: "Gemi",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817178,
				tcgplayer: 623453
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817178,
				tcgplayer: 623453
			}
		},
	],
}

export default card
