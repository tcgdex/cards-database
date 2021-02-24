import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Mewtwo-GX",
		fr: "Mewtwo-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 190,
	types: [
		"Psychic",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Full Burst",
				fr: "Pleine Puissance",
			},
			effect: {
				en: "This attack does 30 damage times the amount of Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies attachées à ce Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Absorption",
				fr: "Super Absorption",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Psystrike-GX",
				fr: "Frappe Psy-GX",
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 200,

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
