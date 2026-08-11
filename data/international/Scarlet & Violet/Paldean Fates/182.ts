import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [215],
	set: Set,

	name: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'es-es': "Sneasel",
		'it-it': "Sneasel",
		'pt-br': "Sneasel",
		'de-de': "Sniebel"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Dig Claws",
			'fr-fr': "Creusogriffes",
			'es-es': "Hundir Garras",
			'it-it': "Scavazanne",
			'pt-br': "Fincar Garras",
			'de-de': "Schaufelkrallen"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751721,
				tcgplayer: 535110,
				cardtrader: 274367
			}
		},
	],

	illustrator: "Kagemaru Himeno",

	description: {
		'en-us': "This cunning Pokémon hides under the cover of darkness, waiting to attack its prey.",
	},

}

export default card
