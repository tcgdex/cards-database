import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Seviper",
		fr: "Seviper",
		de: "Vipitis"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		336,
	],

	hp: 80,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Deadly Poison",
				fr: "Poison fatal",
				de: "Tödliches Gift"
			},
			effect: {
				en: "You may discard a Grass Energy card attached to Seviper. If you do, the Defending Pokémon is now Poisoned.",
				fr: "Vous pouvez défausser une carte Énergie  attachée à Seviper. Dans ce cas, le Pokémon Défenseur est maintenant Empoisonné.",
				de: "Du kannst eine -Energiekarte, die an Vipitis angelegt ist, auf den Ablagestapel legen. Wenn du das machst, ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Extra Poison",
				fr: "Poison plus",
				de: "Extra Gift"
			},
			effect: {
				en: "If the Defending Pokémon is Pokémon-ex, the Defending Pokémon is now Asleep and Poisoned.",
				fr: "Si le Pokémon Défenseur est un Pokémon-ex, il est maintenant Endormi et Empoisonné.",
				de: "Falls das Verteidigende Pokémon ein Pokémon-ex ist, dann ist das Verteidigende Pokémon jetzt vergiftet und schläft."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 275788,
		tcgplayer: 89082
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		},
	]
}

export default card
