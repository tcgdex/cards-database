import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [551],
	set: Set,

	name: {
		'en-us': "Sandile",
		'fr-fr': "Mascaïman",
		'es-es': "Sandile",
		'it-it': "Sandile",
		'pt-br': "Sandile",
		'de-de': "Ganovil"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "The desert gets cold at night, so when the sun sets, this Pokémon burrows deep into the sand and sleeps until sunrise.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682158,
				tcgplayer: 451765
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682158,
				tcgplayer: 451765
			}
		},
	],
}

export default card
