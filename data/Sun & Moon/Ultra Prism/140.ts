import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Pheromosa-GX",
		fr: "Cancrelove-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		795,
	],
	hp: 170,
	types: [
		"Grass",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Fast Raid",
				fr: "Raid Éclair",
			},
			effect: {
				en: "If you go first, you can use this attack on your first turn.",
				fr: "Si vous jouez en premier, vous pouvez utiliser cette attaque lors de votre premier tour.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Cruel Spike",
				fr: "Piquant Cruel",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 60,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Beauty-GX",
				fr: "Beauté-GX",
			},
			effect: {
				en: "This attack does 50 damage for each Prize card your opponent has taken. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts pour chaque carte Récompense que votre adversaire a récupérée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
