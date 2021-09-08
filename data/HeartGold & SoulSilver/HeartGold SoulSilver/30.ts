import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Smoochum",
		fr: "Lippouti",
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
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
				fr: "Joli visage endormi",
			},
			effect: {
				fr: "Tant que Lippouti reste Endormi, prévenez tous les dégâts qui peuvent lui être infligés par des attaques.",
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Energy Antics",
				fr: "Singénergies",
			},
			effect: {
				en: "Move an Energy card attached to 1 of your opponent’s Pokémon to another of your opponent’s Pokémon. Smoochum is now Asleep.",
				fr: "Déplacez une carte Énergie attachée à l’un des Pokémon de votre adversaire sur un autre de ses Pokémon. Lippouti est maintenant Endormi.",
			},

		},
	],

	retreat: 0
}

export default card
