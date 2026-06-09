import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Pelipper",
		fr: "Bekipan",
		de: "Pelipper"
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
		en: "Wingull",
		fr: "Goélise"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bay Dance",
				fr: "Danse de vengeance",
				de: "Bay Dance"
			},
			effect: {
				en: "During your next turn, if any of your current Active Pokémon does damage to any Defending Pokémon, the attack does 30 more damage (before applying Weakness and Resistance).",
				fr: "Lors de votre prochain tour, si un de vos Pokémon Actifs inflige des dégâts à un des Pokémon Défenseurs, l'attaque inflige 30 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				de: "During your next turn, if any of your curret Active Pokémon does damage to any Defending Pokémon, the attack does 30 more damage (before apply Weakness and Resistance)."
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
				en: "Aqua Sonic",
				fr: "Aquasonique",
				de: "Aqua Sonic"
			},
			effect: {
				en: "This attack's damage is not affected by Resistance.",
				fr: "Les dégâts infligés par cette attaque ne sont pas affectés par la Résistance.",
				de: "This attack's damage is not affected by Resistance."
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

	thirdParty: {
		tcgplayer: 87976,
		cardmarket: 276424
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
