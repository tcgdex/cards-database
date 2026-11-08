import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Lightning"
	],
	stage: "Basic",
	retreat: 1,
	illustrator: "kodama",

	description: {
		'en-us': "A plan was recently announced to gather many Pikachu and make an electric power plant."
	},

	attacks: [{
		name: {
			'en-us': "Tail Whap",
			'fr-fr': "Queue Battoir"
		},

		damage: 10
	}, {
		name: {
			'en-us': "Spark",
			'fr-fr': "Étincelle"
		},

		damage: 20,

		effect: {
			'en-us': "This attack does 10 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige 10 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297245,
				tcgplayer: 152868
			}
		},
	],

}

export default card