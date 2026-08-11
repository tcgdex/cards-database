import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Manectric",
		'fr-fr': "Elecsprint",
		'de-de': "Voltenso"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		310,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thunder Spear",
				'fr-fr': "Lance-éclair",
				'de-de': "Thunder Spear"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc).",
				'de-de': "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weaknesss and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnetic Tackle",
				'fr-fr': "Charge magnétique",
				'de-de': "Magnetic Tackle"
			},
			effect: {
				'en-us': "You may do 40 damage plus 10 more damage for each Lightning Energy attached to Manectric. If you do, Manectric does 10 damage to itself.",
				'fr-fr': "Vous pouvez infliger 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie  attachée à Elecsprint. Elecsprint s'inflige alors 10 dégâts.",
				'de-de': "You may do 40 damage plus 10 more damage for each  Energy attached to Manectric. If you do, Manectric. If you do, Manectric does 10 damage to itself."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87155,
				cardmarket: 276441
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87155,
				cardmarket: 276441
			},
		},
		{
			type: "normal",
			stamp: ["pre-release"],
			thirdParty: {
				tcgplayer: 153078,
				cardmarket: 882854
			},
		},
	],

}

export default card
