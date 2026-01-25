import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Pidgey",
		fr: "Roucool",
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
				fr: "Messager",
				de: "Bote"
			},
			effect: {
				en: "Search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle Pidgey and all cards attached to it back into your deck.",
				fr: "Cherchez un Pokémon dans votre deck, montrez-le à votre adversaire et ajoutez-le à votre main. Mélangez Roucool et toutes les cartes qui lui sont attachées avec votre deck.",
				de: "Durchsuche dein Deck nach 1 Pokémon-Karte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische Taubsi und alle daran angelegten Karten zurück in dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Glide",
				fr: "Glissade",
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
		cardmarket: 279710,
		tcgplayer: 88052
	}
}

export default card
