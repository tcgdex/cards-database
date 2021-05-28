import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Seismitoad",
		fr: "Crapustule"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Palpitoad",
		fr: "Batracné"
	},

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Split Spiral Punch",
				fr: "Coup d’Poing en Demi Spirale"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Resonance",
				fr: "Résonance"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is Confused, this attack does 120 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est Confus, cette attaque inflige 120 dégâts supplémentaires."
			},
			damage: "120+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 170,
	types: ["Water"],
	regulationMark: "D"
}

export default card
