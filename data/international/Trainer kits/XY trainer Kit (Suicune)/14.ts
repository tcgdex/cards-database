import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Suicune)'

const card: Card = {
	dexId: [245],
	set: Set,

	name: {
		'en-us': "Suicune",
		'fr-fr': "Suicune",
		'es-es': "Suicune",
		'it-it': "Suicune",
		'pt-br': "Suicune",
		'de-de': "Suicune"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	illustrator: "Yoshinobu Saito",

	description: {
		'en-us': "Said to be the embodiment of north winds, it can instantly purify filthy, murky water."
	},

	attacks: [{
		name: {
			'en-us': "Spiral Drain",
			'fr-fr': "Spirale Épuisante"
		},

		damage: 20,

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts à ce Pokémon."
		}
	}, {
		name: {
			'en-us': "Aurora Beam",
			'fr-fr': "Onde Boréale"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 118850
	}
}

export default card