import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Lunatone",
		'fr-fr': "Seleroc",
		'de-de': "Lunastein"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		337,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Moonglow",
				'fr-fr': "Éclat de lune",
				'de-de': "Moonglow"
			},
			effect: {
				'en-us': "The Retreat Cost for each Solrock you have in play is 0.",
				'fr-fr': "Le Coût de retraite de chaque Solaroc que vous avez en jeu est de 0.",
				'de-de': "The Retreat Cost for each Solrock you have in play is 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Foresight",
				'fr-fr': "Prévoyance",
				'de-de': "Foresight"
			},
			effect: {
				'en-us': "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
				'fr-fr': "Regardez les 5 cartes du dessus du deck d'1 joueur et replacez-les dans le deck de ce joueur dans n'importe quel ordre.",
				'de-de': "Look at the top 5 cards of either player's deck and put them back on the top of that player's deck in any order."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Target Beam",
				'fr-fr': "Cible lumineuse",
				'de-de': "Target Beam"
			},
			effect: {
				'en-us': "Does 20 damage plus 10 more damage for each Solrock you have in play.",
				'fr-fr': "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Solaroc que vous avez en jeu.",
				'de-de': "Does 20 damage plus 10 more damage for each Solrock you have in play."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86924,
				cardmarket: 276439
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86924,
				cardmarket: 276439
			},
		},
		{
			type: "normal",
			stamp: ["miska-saari"],
			thirdParty: {
				tcgplayer: 477785,
				cardmarket: 869546
			},
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"],
			thirdParty: {
				tcgplayer: 479703,
				cardmarket: 869381
			},
		}, 
	],

}

export default card
