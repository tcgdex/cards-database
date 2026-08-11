import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [7],
	set: Set,

	name: {
		'en-us': "Squirtle",
		'fr-fr': "Carapuce",
		'es-es': "Squirtle",
		'it-it': "Squirtle",
		'pt-br': "Squirtle",
		'de-de': "Schiggy"
	},

	illustrator: "sowsow",
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
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'de-de': "Aquaknarre"
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
		'en-us': "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665247,
				tcgplayer: 274445
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665247,
				tcgplayer: 274445
			}
		},
	],
}

export default card
