import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Espeon & Deoxys-GX",
		fr: "Mentali et Deoxys-GX",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		196,
	],
	hp: 260,
	types: [
		"Psychic",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psychic Club",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "This attack does 30 more damage for each of your Benched Psychic Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross Division-GX",
				fr: "Club Psy",
			},
			effect: {
				en: "Put 10 damage counters on your opponent's Pokémon in any way you like. If this Pokémon has at least 3 extra Energy attached to it (in addition to this attack's cost), put 20 damage counters on them instead. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon Psychic de Banc.",
			},
			damage: "10+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Division Croisée-GX",
			},
			effect: {
				fr: "Placez 10 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez. Si au moins 3 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), placez 20 marqueurs de dégâts à la place. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
