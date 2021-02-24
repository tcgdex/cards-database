import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Frost Rotom",
		fr: "Motisma Froid",
	},
	illustrator: "MAHOU",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		479,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Roto Motor",
				fr: "Moti-Moteur",
			},
			effect: {
				en: "If you have 9 or more Pokémon Tool cards in your discard pile, ignore all Energy in the attack cost of each of this Pokémon's attacks.",
				fr: "Si vous avez 9 cartes Outil Pokémon ou plus dans votre pile de défausse, ignorez toutes les Énergies dans le coût d’attaque de chacune des attaques de ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Frost Crush",
				fr: "Écrasement Froid",
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Energy attached to all of your opponent's Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies attachées aux Pokémon de votre adversaire.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
