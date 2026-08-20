import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Snorlax",
		fr: "Ronflex",
		de: "Relaxo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Stir and Snooze",
				fr: "Sommeil Lourd",
				de: "Umdrehen und Dösen"
			},
			effect: {
				en: "If this Pokémon is Asleep, flip 2 coins instead of 1 between turns. If either of them is tails, this Pokémon is still Asleep.",
				fr: "Si ce Pokémon est Endormi, lancez 2 pièces au lieu d'une entre chaque tour. Si vous obtenez au moins un côté pile, ce Pokémon reste Endormi.",
				de: "Wenn dieses Pokémon schläft, wirf zwischen den Zügen 2 Münzen anstelle von 1 Münze. Wenn eine oder beide Münzen „Zahl“ zeigen, schläft dieses Pokémon weiter."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sleepy Press",
				fr: "Pression Torpide",
				de: "Schlafwalze"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon. This Pokémon is now Asleep.",
				fr: "Soignez 20 dégâts à ce Pokémon. Ce Pokémon est maintenant Endormi.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon. Dieses Pokémon schläft jetzt."
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

	description: {
		en: "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
		de: "Es ist erst satt, wenn es über 400 kg Nahrung am Tag gefressen hat. Ist es mit dem Essen fertig, schläft es sofort ein."
	},

	thirdParty: {
		cardmarket: 288496,
		tcgplayer: 113716
	}
}

export default card
