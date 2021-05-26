import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Ninetales",
		fr: "Feunard"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix"
	},

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Hex",
				fr: "Châtiment"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is affected by a Special Condition, this attack does 90 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 90 dégâts supplémentaires."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flickering Flames",
				fr: "Flammes Vacillantes"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 120,
	types: ["Fire"]
}

export default card
