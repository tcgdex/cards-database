import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [7],
	set: Set,

	name: {
		'fr-fr': "Carapuce",
		'de-de': "Schiggy",
		'es-es': "Squirtle",
		'pt-br': "Squirtle",
		'it-it': "Squirtle",
		'en-us': "Squirtle"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Pistolet à O",
			'de-de': "Aquaknarre",
			'es-es': "Pistola Agua",
			'pt-br': "Revólver d'Água",
			'it-it': "Pistolacqua",
			'en-us': "Water Gun"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",

	description: {
		'en-us': "When it retracts its long neck into its shell, it squirts out water with vigorous force."
	},

	thirdParty: {
		cardmarket: 664339
	}
}

export default card
