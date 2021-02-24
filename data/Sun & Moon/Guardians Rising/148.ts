import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Turtonator-GX",
		fr: "Boumata-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		776,
	],
	hp: 190,
	types: [
		"Fire",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shell Trap",
				fr: "Carapiège",
			},
			effect: {
				en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put 8 damage counters on the Attacking Pokémon.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même si ce Pokémon est mis K.O.), placez 8 marqueurs de dégâts sur le Pokémon Attaquant.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Bright Flame",
				fr: "Flamme Éclatante",
			},
			effect: {
				en: "Discard 2 Fire Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies Fire de ce Pokémon.",
			},
			damage: 160,

		},
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Nitro Tank-GX",
				fr: "Réservoir Nitro-GX",
			},
			effect: {
				en: "Attach 5 Fire Energy cards from your discard pile to your Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
				fr: "Attachez 5 cartes Énergie Fire de votre pile de défausse à vos Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

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
