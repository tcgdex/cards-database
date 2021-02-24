import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Poipole",
		fr: "Vémini",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		803,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spit Poison",
				fr: "Crache-Venin",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Knockout Reviver",
				fr: "K.O. Futile",
			},
			effect: {
				en: "During your opponent's next turn, if this Pokémon is Knocked Out, your opponent can't take any Prize cards for it.",
				fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon est mis K.O., votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
