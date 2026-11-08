import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Pelipper",
		'fr-fr': "Bekipan",
		'de-de': "Pelipper"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		279,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Wingull",
		'fr-fr': "Goélise"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bay Dance",
				'fr-fr': "Danse de vengeance",
				'de-de': "Bay Dance"
			},
			effect: {
				'en-us': "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, the attack does 30 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Lors de votre prochain tour, si un de vos Pokémon Actifs inflige des dégâts à un des Pokémon Défenseurs, l'attaque inflige 30 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'de-de': "During your next turn, if any of your curret Active Pokémon does damage to any Defending Pokémon, the attack does 30 more damage (before apply Weakness and Resistance)."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Sonic",
				'fr-fr': "Aquasonique",
				'de-de': "Aqua Sonic"
			},
			effect: {
				'en-us': "This attack's damage is not affected by Resistance.",
				'fr-fr': "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "This attack's damage is not affected by Resistance."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87976,
				cardmarket: 276424
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87976,
				cardmarket: 276424
			},
		},
	],

}

export default card
