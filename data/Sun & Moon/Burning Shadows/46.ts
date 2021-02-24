import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
	},
	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		604,
	],
	hp: 140,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Dark Clamp",
				fr: "Pince des Ténèbres",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 50,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Vacuum Bolt",
				fr: "Éclair Aspiré",
			},
			effect: {
				en: "You may do 80 more damage. If you do, this attack does 80 damage to 1 of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Vous pouvez infliger 80 dégâts supplémentaires. Dans ce cas, cette attaque inflige 80 dégâts à l’un de vos Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
