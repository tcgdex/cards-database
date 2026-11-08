import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [507],
	set: Set,

	name: {
		'fr-fr': "Ponchien",
		'en-us': "Herdier",
		'es-es': "Herdier",
		'it-it': "Herdier",
		'pt-br': "Herdier",
		'de-de': "Terribark"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Ponchiot",
		'en-us': "Lillipup",
		'es-es': "Lillipup",
		'it-it': "Lillipup",
		'pt-br': "Lillipup",
		'de-de': "Yorkleff"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Ruade",
			'en-us': "Rear Kick",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Chute Traseiro",
			'de-de': "Rückwärtskick"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Enfoncement",
			'en-us': "Hammer In",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
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
	regulationMark: "G",

	description: {
		'en-us': "The black fur that covers this Pokémon's body is dense and springy. Even sharp fangs bounce right off.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725251,
				tcgplayer: 509711,
				cardtrader: 256067
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725251,
				tcgplayer: 509711,
				cardtrader: 256067
			}
		},
	],

	illustrator: "Kariya",

	
}

export default card
