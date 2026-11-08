import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [926],
	set: Set,

	name: {
		'en-us': "Fidough",
		'fr-fr': "Pâtachiot",
		'es-es': "Fidough",
		'it-it': "Fidough",
		'pt-br': "Fidough",
		'de-de': "Hefel"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "sowsow",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 751793,
				tcgplayer: 536070
			},
		}
	],
}

export default card
