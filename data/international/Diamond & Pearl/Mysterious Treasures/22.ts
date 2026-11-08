import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Chimecho",
		'fr-fr': "Éoko",
		'de-de': "Palimpalim"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		358,
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
				'en-us': "Call In",
				'fr-fr': "Faire appel",
				'de-de': "Einfordern"
			},
			effect: {
				'en-us': "Draw a card. If Chingling is anywhere under Chimecho, draw 2 more cards.",
				'fr-fr': "Piochez une carte. Si Korillon se trouve sous Éoko, piochez 2 cartes supplémentaires.",
				'de-de': "Ziehe 1 Karte. Wenn Klingplim sich an beliebiger Stelle unter Palimpalim befindet, ziehe 2 weitere Karten."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Strange Bell",
				'fr-fr': "Cloche étrange",
				'de-de': "Seltsamer Glockenton"
			},
			effect: {
				'en-us': "If the Defending Pokémon is a Basic Pokémon, that Pokémon is now Confused.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon de base, il est maintenant Confus.",
				'de-de': "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, ist es jetzt verwirrt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "To knock foes flying, it makes the air shudder with its cries. It converses using seven cries.",
		'fr-fr': "Son langage comporte sept cris. Il les utilise pour faire vibrer l'air et projeter son ennemi."
	},

	thirdParty: {
		cardmarket: 277651,
		tcgplayer: 84295
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
