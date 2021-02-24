import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Muk & Alolan Muk-GX",
		fr: "Grotadmorv et Grotadmorv d’Alola-GX",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		89,
	],
	hp: 270,
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
				en: "Severe Poison",
				fr: "Règle des ESCOUADES",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Put 8 damage counters instead of 1 on that Pokémon between turns.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Absorption",
				fr: "Poison Violent",
			},
			effect: {
				en: "If your opponent's Active Pokémon is Poisoned, heal 100 damage from this Pokémon.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 8 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
			},
			damage: 120,

		},
		{

			name: {
				en: "Nasty Goo Mix-GX",
				fr: "Absorption de Poison",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Paralyzed and Poisoned. If this Pokémon has at least 4 extra Energy attached to it (in addition to this attack's cost), put 15 damage counters instead of 1 on that Pokémon between turns. (You can't use more than 1 GX attack in a game.)",
				fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, soignez 100 dégâts à ce Pokémon.",
			},
			damage: 120,

		},
		{

			name: {
				fr: "Mixture de Glu Fétide-GX",
			},
			effect: {
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Paralysé. Si au moins 4 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), placez 15 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
