import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [821],
	set: Set,

	name: {
		'fr-fr': "Minisange",
		'en-us': "Rookidee",
		'es-es': "Rookidee",
		'it-it': "Rookidee",
		'pt-br': "Rookidee",
		'de-de': "Meikro"
	},

	illustrator: "Lee HyunJung",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	attacks: [{
		name: {
			'fr-fr': "Battement",
			'en-us': "Flap",
			'es-es': "Aleteo",
			'it-it': "Alabattito",
			'pt-br': "Asa",
			'de-de': "Flattern"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'fr-fr': "Glissement",
			'en-us': "Glide",
			'es-es': "Planeo",
			'it-it': "Aliante",
			'pt-br': "Planeio",
			'de-de': "Gleiten"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		'en-us': "It will bravely challenge any opponent, no matter how powerful. This Pokémon benefits from every battle—even a defeat increases its strength a bit."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539893,
				tcgplayer: 232489
			}
		},
	],
}

export default card
