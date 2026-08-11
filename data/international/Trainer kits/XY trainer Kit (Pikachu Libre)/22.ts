import { Card } from 'models/database/card'
import Set from '../XY trainer Kit (Pikachu Libre)'

const card: Card = {
	dexId: [310],
	set: Set,

	name: {
		'en-us': "Manectric",
		'fr-fr': "Élecsprint",
		'es-es': "Manectric",
		'it-it': "Manectric",
		'pt-br': "Manectric",
		'de-de': "Voltenso"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt",
		'es-es': "Electrike",
		'it-it': "Electrike",
		'pt-br': "Electrike",
		'de-de': "Frizelbliz"
	},

	stage: "Stage1",
	retreat: 1,
	illustrator: "match",

	description: {
		'en-us': "It discharges electricity from its mane. It creates a thundercloud overhead to drop lightning bolts."
	},

	attacks: [{
		name: {
			'en-us': "Random Spark",
			'fr-fr': "Étincelle Surprise"
		},

		effect: {
			'en-us': "This attack does 30 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		}
	}, {
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	thirdParty: {
		tcgplayer: 118818
	}
}

export default card