import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Misdreavus",
		fr: "Feuforeve",
		de: "Traunfugil"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		200,
	],

	hp: 60,

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
				en: "Mumble",
				fr: "Marmonner",
				de: "Grummeln"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Dual Draw",
				fr: "Pioche mutuelle",
				de: "Doppelzug"
			},
			effect: {
				en: "Each player draws 3 cards.",
				fr: "Chaque joueur pioche 3 cartes.",
				de: "Jeder Spieler zieht 3 Karten."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It loves to bite and yank people’s hair from behind without warning, just to see their shocked reactions."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279310
	}
}

export default card
