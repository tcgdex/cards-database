import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [209],
	set: Set,

	name: {
		'en-us': "Snubbull",
		'fr-fr': "Snubbull",
		'es-es': "Snubbull",
		'it-it': "Snubbull",
		'pt-br': "Snubbull",
		'de-de': "Snubbull"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Kyoko Umemoto",

	description: {
		'en-us': "In contrast to its appearance, it's quite timid. When playing with other puppy Pokémon, it sometimes gets bullied."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'de-de': "Kopfnuss",
			'es-es': "Golpe Cabeza",
			'pt-br': "Cabeçada",
			'it-it': "Bottintesta"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'de-de': "Biss",
			'es-es': "Mordisco",
			'pt-br': "Mordida",
			'it-it': "Morso"
		},

		damage: 30
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582615,
				tcgplayer: 253278
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582615,
				tcgplayer: 253278
			}
		},
	],
}

export default card
