import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [418],
	set: Set,

	name: {
		'en-us': "Buizel",
		'fr-fr': "Mustébouée",
		'de-de': "Bamelin",
		'it-it': "Buizel",
		'es-es': "Buizel",
		'pt-br': "Buizel",
		'es-mx': "Buizel"
	},


	illustrator: "Ayako Ozaki",

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Tail Whap",
			'fr-fr': "Queue Battoir",
			'de-de': "Schweifvertrimmer",
			'it-it': "Codabotta",
			'es-es': "Coletón",
			'pt-br': "Surra de Cauda",
			'es-mx': "Coletón"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'de-de': "Wellenplatscher",
			'it-it': "Schizzi d'Onda",
			'es-es': "Chapoteo Ondulante",
			'pt-br': "Onda Borrifante",
			'es-mx': "Acuasalpicadura"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825931,
				tcgplayer: 632870
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825931,
				tcgplayer: 632870
			}
		},
	],
}

export default card
