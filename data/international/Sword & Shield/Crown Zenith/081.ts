import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [690],
	set: Set,

	name: {
		'en-us': "Skrelp",
		'fr-fr': "Venalgue",
		'es-es': "Skrelp",
		'it-it': "Skrelp",
		'pt-br': "Skrelp",
		'de-de': "Algitt"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Melt",
			'fr-fr': "Dissolution",
			'es-es': "Derretir",
			'it-it': "Liquefazione",
			'pt-br': "Derreter",
			'de-de': "Schmelzen"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It drifts in the ocean, blending in with floating seaweed. When other Pokémon come to feast on the seaweed, Skrelp feasts on them instead.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691799,
				tcgplayer: 478220
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691799,
				tcgplayer: 478220
			}
		},
	],
}

export default card
