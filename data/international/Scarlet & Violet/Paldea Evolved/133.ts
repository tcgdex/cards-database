import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [215],
	set: Set,

	name: {
		'fr-fr': "Farfuret",
		'en-us': "Sneasel",
		'es-es': "Sneasel",
		'it-it': "Sneasel",
		'pt-br': "Sneasel",
		'de-de': "Sniebel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'fr-fr': "Creusogriffes",
			'en-us': "Dig Claws",
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
			type: 'normal',
			thirdParty: {
				cardmarket: 715608,
				tcgplayer: 497594,
				cardtrader: 248790
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715608,
				tcgplayer: 497594,
				cardtrader: 248790
			}
		},
	],

	illustrator: "Kagemaru Himeno",

	description: {
		'en-us': "This cunning Pokémon hides under the cover of darkness, waiting to attack its prey.",
	},
}

export default card
