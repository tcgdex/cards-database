import { Card } from "models/database/card"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [125],
	set: Set,

	name: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
		'es-es': "Electabuzz",
		'it-it': "Electabuzz",
		'pt-br': "Electabuzz",
		'de-de': "Elektek"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			'en-us': "Chop",
			'fr-fr': "Coup Tranchant",
			'es-es': "Cortar",
			'it-it': "Ceffone",
			'pt-br': "Trincar",
			'de-de': "Hacker"
		},

		damage: 20
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			'en-us': "Electric Punch",
			'fr-fr': "Poing Électrique",
			'es-es': "Puño Eléctrico",
			'it-it': "Pugno Elettrico",
			'pt-br': "Murro Elétrico",
			'de-de': "Elektroschlag"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760683,
				tcgplayer: 542797
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760683,
				tcgplayer: 542797
			}
		},
	],

	illustrator: "Uta",

}

export default card