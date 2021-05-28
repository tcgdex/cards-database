import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Alakazam V",
		fr: "Alakazam V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 190,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Zen Spoon",
				fr: "Cuillère Zen"
			},
			effect: {
				en: "Put 3 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Mind Ruler",
				fr: "Contrôle Mental"
			},
			effect: {
				en: "This attack does 30 damage for each card in your opponent’s hand.",
				fr: "Cette attaque inflige 30 dégâts pour chaque carte dans la main de votre adversaire."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
