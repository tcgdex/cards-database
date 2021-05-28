import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Muk",
		fr: "Grotadmorv"
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Grimer",
		fr: "Tadmorv"
	},

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Triple Poison",
				fr: "Triple Poison"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned. During Pokémon Checkup, put 3 damage counters on that Pokémon instead of 1.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le Contrôle Pokémon, placez 3 marqueurs de dégâts sur ce Pokémon-là au lieu d’un."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sludge Whirlpool",
				fr: "Tourbillon de Boue"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D"
}

export default card
