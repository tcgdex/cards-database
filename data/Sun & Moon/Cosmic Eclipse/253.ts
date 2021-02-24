import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Blastoise & Piplup-GX",
		fr: "Tortank et Tiplouf-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		9,
	],
	hp: 270,
	types: [
		"Water",
	],

	stage: "Basic",
	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Splash Maker",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "You may attach up to 3 {W} Energy cards from your hand to your Pokémon in any way you like. If you do, heal 50 damage from those Pokémon for each card you attached to them in this way.",
			},
			damage: 150,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Bubble Launcher GX",
				fr: "Faiseur de Vagues",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Paralyzed. If this Pokémon has at least 3 extra {W} Energy attached to it (in addition to this attack's cost), this attack does 150 more damage. (You can't use more than 1 GX attack in a game.)",
				fr: "Vous pouvez attacher jusqu’à 3 cartes Énergie Water de votre main à vos Pokémon, de la manière que vous voulez. Dans ce cas, soignez 50 dégâts à ces Pokémon pour chaque carte qui leur est attachée de cette façon.",
			},
			damage: 100,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				fr: "Lance-Bulles-GX",
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé. Si au moins 3 Énergies Water supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 150 dégâts supplémentaires. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: "100+",

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
