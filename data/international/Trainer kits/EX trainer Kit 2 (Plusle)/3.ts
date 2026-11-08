import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	dexId: [326],
	set: Set,

	name: {
		'en-us': "Grumpig",
		'fr-fr': "Groret"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",
	hp: 70,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Spoink",
		'fr-fr': "Spoink"
	},

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Snap Tail",
			'fr-fr': "Claquement de queue"
		},
		effect: {
			'en-us': "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
		}
	}, {
		cost: [
			"Psychic",
			"Colorless"
		],
		name: {
			'en-us': "Psypunch",
			'fr-fr': "Coup de poing psy"
		},
		damage: 40
	}],

	weaknesses: [
		{
			type: "Psychic",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 277183,
				tcgplayer: 85968
			}
		},
	],

}

export default card
