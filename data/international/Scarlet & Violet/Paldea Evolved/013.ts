import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [906],
	set: Set,

	name: {
		'fr-fr': "Poussacha",
		'en-us': "Sprigatito",
		'es-es': "Sprigatito",
		'it-it': "Sprigatito",
		'pt-br': "Sprigatito",
		'de-de': "Felori"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Creusogriffes",
			'en-us': "Dig Claws",
			'es-es': "Hundir Garras",
			'it-it': "Scavazanne",
			'pt-br': "Fincar Garras",
			'de-de': "Schaufelkrallen"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715485,
				tcgplayer: 497424,
				cardtrader: 248309
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715485,
				tcgplayer: 497424,
				cardtrader: 248309
			}
		},
	],

	illustrator: "Naoyo Kimura",

	description: {
		'en-us': "Its fluffy fur is similar in composition to plants. This Pokémon frequently washes its face to keep it from drying out.",
	},
}

export default card
