import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Shuckle-GX",
		fr: "Caratroc-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		213,
	],
	hp: 170,
	types: [
		"Grass",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Protective Shell",
				fr: "Carapace Protectrice",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have 2 or fewer Energy attached to them.",
				fr: "Évitez tous les dégâts d’attaques infligés à ce Pokémon par les Pokémon de votre adversaire auxquels sont attachées 2 Énergies ou moins.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Triple Poison",
				fr: "Triple Poison",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Put 3 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 3 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Wrap-GX",
				fr: "Ligotage-GX",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Paralyzed. (You can't use more than 1 GX attack in a game.)",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
