import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [679],

	name: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
		'es-es': "Honedge",
		'es-mx': "Honedge",
		'de-de': "Gramokles",
		'it-it': "Honedge",
		'pt-br': "Honedge"
	},

	illustrator: "Apios",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Cut",
			'fr-fr': "Coupe",
			'es-es': "Corte",
			'es-mx': "Corte",
			'de-de': "Zerschneider",
			'it-it': "Taglio",
			'pt-br': "Cortar"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684378,
				cardmarket: 877472
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684378,
				cardmarket: 877472
			}
		}
	],

}

export default card
