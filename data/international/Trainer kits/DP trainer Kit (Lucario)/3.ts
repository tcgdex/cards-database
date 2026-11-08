import { Card } from 'models/database/card'
import Set from '../DP trainer Kit (Lucario)'

const card: Card = {
	dexId: [448],
	set: Set,

	name: {
		'en-us': "Lucario",
		'fr-fr': "Lucario"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 90,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu"
	},

	attacks: [{
		cost: [
			"Colorless"
		],
		name: {
			'en-us': "Feint",
			'fr-fr': "Ruse"
		},
		effect: {
			'en-us': "This attack’s damage isn’t affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance."
		},
		damage: 30
	}, {
		cost: [
			"Fighting",
			"Fighting"
		],
		name: {
			'en-us': "Aura Sphere",
			'fr-fr': "Aurasphère"
		},
		effect: {
			'en-us': "Does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
		},
		damage: 40
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	description: {
		'en-us': "It has the ability to sense the auras of all things. It understands human speech."
	},

	retreat: 1,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278013,
				tcgplayer: 86875
			}
		},
	],

}

export default card
