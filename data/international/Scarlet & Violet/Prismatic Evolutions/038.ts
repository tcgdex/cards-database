import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [682],
	set: Set,

	name: {
		'en-us': "Spritzee",
		'fr-fr': "Fluvetin",
		'es-es': "Spritzee",
		'pt-br': "Spritzee",
		'it-it': "Spritzee",
		'de-de': "Parfi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Fairy Wind",
			'fr-fr': "Vent Féérique",
			'es-es': "Viento Feérico",
			'pt-br': "Vento de Fada",
			'it-it': "Vento di Fata",
			'de-de': "Feenbrise"
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
	regulationMark: "H",
	illustrator: "ryoma uratsuka",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805427,
				tcgplayer: 610393
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805427,
				tcgplayer: 610393
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806456,
				tcgplayer: 610561
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806457,
				tcgplayer: 610662
			}
		},
	],
}

export default card
