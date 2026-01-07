import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Smoochum",
		fr: "Lippouti"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		238,
	],
	hp: 30,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Sweet Sleeping Face",
				fr: "Joli visage endormi"
			},
			effect: {
				en: "As long as Smoochum is Asleep, prevent all damage done to Smoochum from attacks.",
				fr: "Tant que Lippouti reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques."
			},
		},
	],
	attacks: [
		{

			name: {
				en: "Energy Antics",
				fr: "Singénergies"
			},
			effect: {
				en: "Move an Energy card attached to 1 of your opponent's Pokémon to another one of your opponent's Pokémon. Smoochum is now Asleep.",
				fr: "Déplacez une carte Énergie attachée à l'un des Pokémon de votre adversaire sur un autre de ses Pokémon. Lippouti est maintenant Endormi."
			},

		},
	],

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
