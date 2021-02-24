import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Mega Lopunny & Jigglypuff-GX",
		fr: "Méga-Lockpin et Rondoudou-GX",
	},
	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		39,
	],
	hp: 240,
	types: [
		"Colorless",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jumping Balloon",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "This attack does 60 more damage for each of your opponent's Pokémon-GX and Pokémon-EX in play.",
			},
			damage: 60,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Puffy Smashers-GX",
				fr: "Ballon Bondissant",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep. If this Pokémon has at least 4 extra Energy attached to it (in addition to this attack's cost), this attack does 200 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 60 dégâts supplémentaires pour chacun des Pokémon-GX et Pokémon-EX en jeu de votre adversaire.",
			},
			damage: "60＋",

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Écrasement Rebondi-GX",
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Si au moins 4 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 200 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
