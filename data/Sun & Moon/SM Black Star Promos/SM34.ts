import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Bewear-GX",
		fr: "Chelours-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		760,
	],
	hp: 210,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bear Hug",
				fr: "Câlin d’Ours",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 80,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Impact",
				fr: "Double Impact",
			},
			effect: {
				en: "Flip 2 coins. This attack does 100 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 100,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Big Throw-GX",
				fr: "Grand Lancer-GX",
			},
			effect: {
				en: "Discard your opponent's Active Pokémon and all cards attached to it. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez le Pokémon Actif de votre adversaire et toutes les cartes qui lui sont attachées. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
