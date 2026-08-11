import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [296],
	set: Set,

	name: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita",
		'es-es': "Makuhita",
		'it-it': "Makuhita",
		'pt-br': "Makuhita",
		'de-de': "Makuhita"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "E",
	illustrator: "Oswaldo KATO",

	description: {
		'en-us': "There's a rumor of a traditional recipe for stew that Trainers can use to raise strong Makuhita."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Lunge Out",
			'fr-fr': "Allonger",
			'de-de': "Sprungangriff",
			'es-es': "Arremeter",
			'pt-br': "Bote",
			'it-it': "Affondo Lungo"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'de-de': "Einhämmern",
			'es-es': "Martillear",
			'pt-br': "Martelada",
			'it-it': "Martello"
		},

		damage: 60
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582759,
				tcgplayer: 253352
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582759,
				tcgplayer: 253352
			}
		},
	],
}

export default card
