import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Lunatone",
		fr: "Seleroc",
		de: "Lunastein"
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
				en: "Moonglow",
				fr: "Éclat de lune",
				de: "Moonglow"
			},
			effect: {
				en: "The Retreat Cost for each Solrock you have in play is 0.",
				fr: "Le Coût de retraite de chaque Solaroc que vous avez en jeu est de 0.",
				de: "The Retreat Cost for each Solrock you have in play is 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Foresight",
				fr: "Prévoyance",
				de: "Foresight"
			},
			effect: {
				en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
				fr: "Regardez les 5 cartes du dessus du deck d'1 joueur et replacez-les dans le deck de ce joueur dans n'importe quel ordre.",
				de: "Look at the top 5 cards of either player's deck and put them back on the top of that player's deck in any order."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Target Beam",
				fr: "Cible lumineuse",
				de: "Target Beam"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Solrock you have in play.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Solaroc que vous avez en jeu.",
				de: "Does 20 damage plus 10 more damage for each Solrock you have in play."
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

	thirdParty: {
		tcgplayer: 86924,
		cardmarket: 276439
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["michael-gonzalez"]
		},
	]
}

export default card
