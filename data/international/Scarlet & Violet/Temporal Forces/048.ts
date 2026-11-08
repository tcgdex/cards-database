import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [963],
	set: Set,

	name: {
		'en-us': "Finizen",
		'fr-fr': "Dofin",
		'es-es': "Finizen",
		'it-it': "Finizen",
		'pt-br': "Finizen",
		'de-de': "Normifin"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante",
			'es-es': "Golpe de Lluvia",
			'it-it': "Spruzzapioggia",
			'pt-br': "Chuva Borrifante",
			'de-de': "Regenplatscher"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Sharp Fin",
			'fr-fr': "Aileron Aiguisé",
			'es-es': "Cortaleta",
			'it-it': "Pinnaffilata",
			'pt-br': "Barbatana Afiada",
			'de-de': "Schneidige Flosse"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It likes playing with others of its kind using the water ring on its tail. It uses ultrasonic waves to sense the emotions of other living creatures.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760678,
				tcgplayer: 542792
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760678,
				tcgplayer: 542792
			}
		},
	],

	illustrator: "HYOGONOSUKE",

}

export default card