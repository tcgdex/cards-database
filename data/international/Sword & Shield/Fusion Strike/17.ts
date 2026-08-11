import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [709],
	set: Set,

	name: {
		'en-us': "Trevenant",
		'fr-fr': "Desséliande",
		'es-es': "Trevenant",
		'it-it': "Trevenant",
		'pt-br': "Trevenant",
		'de-de': "Trombork"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Phantump",
		'fr-fr': "Brocélôme",
		'es-es': "Phantump",
		'it-it': "Phantump",
		'pt-br': "Phantump",
		'de-de': "Paragoni"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Narumi Sato",

	description: {
		'en-us': "Small roots that extend from the tips of this Pokémon's feet can tie into the trees of the forest and give Trevenant control over them."
	},

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'de-de': "Sanfter Hieb",
			'es-es': "Bofetada Gentil",
			'pt-br': "Tapinha",
			'it-it': "Schiaffetto"
		},

		damage: 40
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Wood Hammer",
			'fr-fr': "Martobois",
			'de-de': "Holzhammer",
			'es-es': "Mazazo",
			'pt-br': "Martelo de Madeira",
			'it-it': "Mazzuolegno"
		},

		damage: 90
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582061,
				tcgplayer: 253096
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582061,
				tcgplayer: 253096
			}
		},
	],
}

export default card
