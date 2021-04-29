import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Magikarp & Wailord-GX",
		fr: "Magicarpe et Wailord-GX",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		129,
	],
	hp: 300,
	types: [
		"Water",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Super Splash",
				fr: "Règle des ESCOUADES",
			},

			damage: 180,

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Towering Splash GX",
				fr: "Super Éclaboussure",
			},
			effect: {
				en: "If this Pokémon has at least 7 extra Water Energy attached to it (in addition to this attack's cost), this attack does 100 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				fr: "Éclaboussure Imposante-GX",
			},
			effect: {
				fr: "Si au moins 7 Énergies Water supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 100 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
