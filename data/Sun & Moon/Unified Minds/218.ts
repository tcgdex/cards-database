import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Slowpoke & Psyduck-GX",
		fr: "Ramoloss et Psykokwak-GX",
	},
	illustrator: "Miki Tanaka",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		54,
	],
	hp: 250,
	types: [
		"Water",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Ditch and Splash",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "Discard any number of Supporter cards from your hand. This attack does 40 damage for each card you discarded in this way.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Thrilling Times-GX",
				fr: "Défausser et Éclabousser",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 100 more damage. If this Pokémon has at least 6 extra Water Energy attached to it (in addition to this attack's cost), flip 10 coins instead, and this attack does 100 more damage for each heads. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez autant de cartes Supporter que vous le voulez de votre main. Cette attaque inflige 40 dégâts pour chaque carte défaussée de cette façon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				fr: "Temps Heureux-GX",
			},
			effect: {
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 100 dégâts supplémentaires. Si au moins 6 Énergies Water supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), lancez 10 pièces à la place, et cette attaque inflige 100 dégâts supplémentaires pour chaque côté face. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
