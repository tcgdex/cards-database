import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [878],
	set: Set,

	name: {
		'fr-fr': "Charibari",
		'en-us': "Cufant",
		'es-es': "Cufant",
		'it-it': "Cufant",
		'pt-br': "Cufant",
		'de-de': "Kupfanti"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			'fr-fr': "Ruée",
			'en-us': "Stampede",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715624,
				tcgplayer: 497566,
				cardtrader: 248801
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715624,
				tcgplayer: 497566,
				cardtrader: 248801
			}
		},
	],

	illustrator: "Oswaldo KATO",

	description: {
		'en-us': "Using the pointy tip of its trunk, it carves off chunks of hard rocks to eat. It is very docile and helps people with physical labor.",
	},
}

export default card
