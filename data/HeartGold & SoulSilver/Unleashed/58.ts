import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Poliwag",
		fr: "Ptitard",
		de: "Quapsel"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		60,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Pokémon de base et placez-la sur votre Banc. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 1 Basis-Pokémon-Karte und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Razor Fin",
				fr: "Aileron-rasoir",
				de: "Rasierflosse"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "The direction of its belly spiral differs by area. The equator is thought to have an effect on this."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279214
	}
}

export default card
