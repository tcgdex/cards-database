import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Pikachu Libre)'

const card: Card = {
	dexId: [276],
	set: Set,

	name: {
		'en-us': "Taillow",
		'fr-fr': "Nirondelle",
		'es-es': "Taillow",
		'it-it': "Taillow",
		'pt-br': "Taillow",
		'de-de': "Schwalbini"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	retreat: 1,
	illustrator: "Atsuko Nishida",

	description: {
		'en-us': "It dislikes cold seasons. They migrate to other lands in search of warmth, flying over 180 miles a day."
	},

	attacks: [{
		name: {
			'en-us': "Double Peck",
			'fr-fr': "Double Picpic"
		},

		damage: "10×",

		effect: {
			'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face."
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
		tcgplayer: 118812
	}
}

export default card