import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [453],
	set: Set,

	name: {
		'fr-fr': "Cradopaud",
		'de-de': "Glibunkel",
		'es-es': "Croagunk",
		'pt-br': "Croagunk",
		'it-it': "Croagunk",
		'en-us': "Croagunk"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Poing Tire-Bouchon",
			'de-de': "Korkenzieherhieb",
			'es-es': "Puño Tirabuzón",
			'pt-br': "Soco Saca-rolha",
			'it-it': "Pugno Rotante",
			'en-us': "Corkscrew Punch"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "Once diluted, its poison becomes medicinal. This Pokémon came into popularity after a pharmaceutical company chose it as a mascot."
	},

	thirdParty: {
		cardmarket: 665988,
		tcgplayer: 285259
	}
}

export default card
