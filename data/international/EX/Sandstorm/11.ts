import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Seviper",
		'fr-fr': "Seviper",
		'de-de': "Vipitis"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [336],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Deadly Poison",
				'fr-fr': "Poison fatal",
				'de-de': "Tödliches Gift"
			},
			effect: {
				'en-us': "You may discard a Grass Energy card attached to Seviper. If you do, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Vous pouvez défausser une carte Énergie  attachée à Seviper. Dans ce cas, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Du kannst eine -Energiekarte, die an Vipitis angelegt ist, auf den Ablagestapel legen. Wenn du das machst, ist das Verteidigende Pokémon jetzt vergiftet."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Extra Poison",
				'fr-fr': "Poison plus",
				'de-de': "Extra Gift"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, the Defending Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, il est maintenant Endormi et Empoisonné.",
				'de-de': "Falls das Verteidigende Pokémon ein Pokémon-ex ist, dann ist das Verteidigende Pokémon jetzt vergiftet und schläft."
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


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275788,
				tcgplayer: 89082
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275788,
				tcgplayer: 89082
			}
		},
	],

}

export default card
