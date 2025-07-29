import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Chimecho",
		fr: "Éoko",
		de: "Palimpalim"
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
				en: "Call In",
				fr: "Faire appel",
				de: "Einfordern"
			},
			effect: {
				en: "Draw a card. If Chingling is anywhere under Chimecho, draw 2 more cards.",
				fr: "Piochez une carte. Si Korillon se trouve sous Éoko, piochez 2 cartes supplémentaires.",
				de: "Ziehe 1 Karte. Wenn Klingplim sich an beliebiger Stelle unter Palimpalim befindet, ziehe 2 weitere Karten."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Strange Bell",
				fr: "Cloche étrange",
				de: "Seltsamer Glockenton"
			},
			effect: {
				en: "If the Defending Pokémon is a Basic Pokémon, that Pokémon is now Confused.",
				fr: "Si le Pokémon Défenseur est un Pokémon de base, il est maintenant Confus.",
				de: "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, ist es jetzt verwirrt."
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

	description: {
		fr: "Son langage comporte sept cris. Il les utilise pour faire vibrer l'air et projeter son ennemi."
	},

	thirdParty: {
		cardmarket: 277651
	}
}

export default card
