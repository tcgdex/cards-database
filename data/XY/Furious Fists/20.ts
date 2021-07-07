import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Seismitoad EX",
		fr: "Crapustule-EX",
	},
	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		537,
	],
	hp: 180,
	types: [
		"Water",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quaking Punch",
				fr: "Poing Chevrotant",
			},
			effect: {
				en: "Your opponent can’t play any Item cards from his or her hand during his or her next turn.",
				fr: "Votre adversaire ne peut pas jouer de cartes Objet de sa main pendant son prochain tour.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Grenade Hammer",
				fr: "Explo-Maillet",
			},
			effect: {
				en: "This attack does 30 damage to 2 of your Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à 2 de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
