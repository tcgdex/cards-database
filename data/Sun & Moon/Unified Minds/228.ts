import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Garchomp & Giratina-GX",
		fr: "Carchacrok et Giratina-GX",
	},
	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 270,
	types: [
		"Dragon",
	],


	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Linear Attack",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "This attack does 40 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
		{
			cost: [
				"Psychic",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Calamitous Slash",
				fr: "Attaque Linéaire",
			},
			effect: {
				en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 80 more damage.",
				fr: "Cette attaque inflige 40 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 160,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Fighting",
			],
			name: {
				en: "GG End-GX",
				fr: "Calami’Tranche",
			},
			effect: {
				en: "Discard 1 of your opponent's Pokémon and all cards attached to it. If this Pokémon has at least 3 extra Fighting Energy attached to it (in addition to this attack's cost), discard 2 of your opponent's Pokémon instead. (You can't use more than 1 GX attack in a game.)",
				fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: "160+",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Fighting",
			],
			name: {
				fr: "GG Final-GX",
			},
			effect: {
				fr: "Défaussez l’un des Pokémon de votre adversaire et toutes les cartes qui lui sont attachées. Si au moins 3 Énergies Fighting supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), défaussez 2 des Pokémon de votre adversaire au lieu d’un. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
