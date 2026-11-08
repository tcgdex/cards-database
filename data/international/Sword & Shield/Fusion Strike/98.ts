import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [694],
	set: Set,

	name: {
		'en-us': "Helioptile",
		'fr-fr': "Galvaran",
		'es-es': "Helioptile",
		'it-it': "Helioptile",
		'pt-br': "Helioptile",
		'de-de': "Eguana"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Mina Nakai",

	description: {
		'en-us': "The sun powers this Pokémon's electricity generation. Interruption of that process stresses Helioptile to the point of weakness."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Gnaw",
			'fr-fr': "Ronge",
			'de-de': "Nagen",
			'es-es': "Roer",
			'pt-br': "Roída",
			'it-it': "Rosicchiamento"
		},

		damage: 10
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Electro Ball",
			'fr-fr': "Boule Élek",
			'de-de': "Elektroball",
			'es-es': "Bola Voltio",
			'pt-br': "Bola Elétrica",
			'it-it': "Energisfera"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582491,
				tcgplayer: 253254
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582491,
				tcgplayer: 253254
			}
		},
	],
}

export default card
