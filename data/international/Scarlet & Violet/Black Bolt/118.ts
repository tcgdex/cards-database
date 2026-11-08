import { Card } from "models/database/card"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [577],
	set: Set,

	name: {
		'en-us': "Solosis",
		'fr-fr': "Nucléos",
		'de-de': "Monozyto",
		'it-it': "Solosis",
		'pt-br': "Solosis",
		'es-es': "Solosis",
		'es-mx': "Solosis"
	},

	illustrator: "USGMEN",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Rollout",
			'fr-fr': "Roulade",
			'de-de': "Walzer",
			'it-it': "Rotolamento",
			'pt-br': "Rolagem",
			'es-es': "Rodar",
			'es-mx': "Rodada"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "I",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 836148,
				tcgplayer: 642572
			}
		},
	]
}

export default card
