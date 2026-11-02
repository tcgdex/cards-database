import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Seviper",
		fr: "Séviper",
		de: "Vipitis"
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		336,
	],
	hp: 100,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "More Poison",
				fr: "Poison Sans Fin",
				de: "Giftschub"
			},
			effect: {
				en: "Put 1 more damage counter on your opponent's Poisoned Pokémon between turns.",
				fr: "Placez 1 marqueur de dégâts supplémentaire sur le Pokémon Empoisonné de votre adversaire entre chaque tour.",
				de: "Lege zwischen den Zügen 1 Schadensmarke mehr auf das vergiftete Pokémon deines Gegners."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venomous Fang",
				fr: "Croc-Poison",
				de: "Gifthauer"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		en: "In battle, it uses its bladed tail to counter any Zangoose. It secretes a deadly venom in its tail.",
		de: "Die flinken Angriffe von Sengo kontert es mit seinem messerscharfen Schweif, aus dem Gift austritt."
	},
}

export default card
