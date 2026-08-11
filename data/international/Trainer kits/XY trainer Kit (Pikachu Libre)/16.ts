import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Pikachu Libre)'

const card: Card = {
	dexId: [661],
	set: Set,

	name: {
		'en-us': "Fletchling",
		'fr-fr': "Passerouge",
		'es-es': "Fletchling",
		'it-it': "Fletchling",
		'pt-br': "Fletchling",
		'de-de': "Dartiri"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	illustrator: "Kanako Eo",

	description: {
		'en-us': "Despite the beauty of its lilting voice, it’s merciless to intruders that enter its territory."
	},

	attacks: [{
		name: {
			'en-us': "Acrobatics",
			'fr-fr': "Acrobatie"
		},

		damage: "10+",

		effect: {
			'en-us': "Flip 2 coins. This attack does 10 more damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts supplémentaires pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 118823
	}
}

export default card