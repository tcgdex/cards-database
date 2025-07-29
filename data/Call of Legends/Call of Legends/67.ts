import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Pidgey",
		de: "Taubsi"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		16,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Messenger",
				de: "Bote"
			},
			effect: {
				en: "Search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle Pidgey and all cards attached to it back into your deck.",
				de: "Durchsuche dein Deck nach 1 Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische Taubsi und alle daran angelegten Karten zurück in dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Glide",
				de: "Gleiten"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	thirdParty: {
		cardmarket: 279710
	}
}

export default card
