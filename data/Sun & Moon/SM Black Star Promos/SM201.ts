import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Reshiram & Charizard-GX",
		fr: "Reshiram et Dracaufeu-GX",
	},
	illustrator: "Ryota Murayama",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 270,
	types: [
		"Fire",
	],

	stage: "Basic",
	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Outrage",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare Strike",
				fr: "Colère",
			},
			effect: {
				en: "This Pokémon can't use Flare Strike during your next turn.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 230,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Double Blaze GX",
				fr: "Attaque Flamboyante",
			},
			effect: {
				en: "If this Pokémon has at least 3 extra {R} Energy attached to it (in addition to this attack's cost), this attack does 100 more damage, and this attack's damage isn't affected by any effects on your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Ce Pokémon ne peut pas utiliser Attaque Flamboyante pendant votre prochain tour.",
			},
			damage: 200,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				fr: "Double Brasier-GX",
			},
			effect: {
				fr: "Si au moins 3 Énergies Fire supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 100 dégâts supplémentaires, et les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: "200+",

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
