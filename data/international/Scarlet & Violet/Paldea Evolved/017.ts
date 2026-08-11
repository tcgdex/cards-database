import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [917],
	set: Set,

	name: {
		'fr-fr': "Tissenboule",
		'en-us': "Tarountula",
		'es-es': "Tarountula",
		'it-it': "Tarountula",
		'pt-br': "Tarountula",
		'de-de': "Tarundel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			'fr-fr': "Crochet",
			'en-us': "Hook",
			'es-es': "Garfio",
			'it-it': "Uncino",
			'pt-br': "Gancho",
			'de-de': "Haken"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715490,
				tcgplayer: 497428,
				cardtrader: 248314
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715490,
				tcgplayer: 497428,
				cardtrader: 248314
			}
		},
	],

	illustrator: "Mina Nakai",

	description: {
		'en-us': "The ball of threads wrapped around its body is elastic enough to deflect the scythes of Scyther, this Pokémon's natural enemy.",
	},
}

export default card
