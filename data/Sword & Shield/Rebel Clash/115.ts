import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Skuntank",
		fr: "Moufflair"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Stunky",
		fr: "Moufouette"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche"
			},

			damage: 50,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Ring",
				fr: "Anneau de Poison"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned. During your opponent's next turn, the Defending Pokémon can’t retreat.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 120,
	types: ["Darkness"],
	regulationMark: "D"
}

export default card
