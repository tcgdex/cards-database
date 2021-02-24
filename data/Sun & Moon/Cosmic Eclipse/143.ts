import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Togepi & Cleffa & Igglybuff-GX",
		fr: "Togepi, Mélo et Toudoudou-GX",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		173,
	],
	hp: 240,
	types: [
		"Fairy",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Rolling Panic",
				fr: "Pagaille Roulante",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: "120+",

		},
		{
			cost: [
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Supreme Puff-GX",
				fr: "Chou-prême-GX",
			},
			effect: {
				en: "Take another turn after this one. (Skip the between-turns step.) If this Pokémon has at least 14 extra Fairy Energy attached to it (in addition to this attack's cost), your opponent shuffles all of their Benched Pokémon and all cards attached to them into their deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Jouez de nouveau après ce tour. (Sautez l’étape entre les tours.) Si au moins 14 Énergies Fairy supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), votre adversaire mélange tous ses Pokémon de Banc et les cartes qui leur sont attachées avec son deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
