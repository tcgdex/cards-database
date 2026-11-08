import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pikachu ex",
		'fr-fr': "Pikachu-ex",
		'es-es': "Pikachu ex",
		'es-mx': "Pikachu ex",
		'de-de': "Pikachu-ex",
		'it-it': "Pikachu-ex",
		'pt-br': "Pikachu ex"
	},

	suffix: "ex",
	illustrator: "booota",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [25],
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Thunderbolt",
			'fr-fr': "Tonnerre",
			'es-es': "Rayo",
			'es-mx': "Atactrueno",
			'de-de': "Donnerblitz",
			'it-it': "Fulmine",
			'pt-br': "Relâmpago"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 869888,
				tcgplayer: 676088
			}
		}
	],
}

export default card
