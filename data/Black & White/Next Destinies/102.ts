import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Zoroark",
		fr: "Zoroark",
		es: "Zoroark",
		it: "Zoroark",
		pt: "Zoroark",
		de: "Zoroark"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		571,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
		de: "Zorua"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Nasty Plot",
				fr: "Machination",
				de: "Ränkeschmied"
			},
			effect: {
				en: "Search your deck for a card and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Foul Play",
				fr: "Tricherie",
				de: "Schmarotzer"
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks and use it as this attack.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur et utilisez-la en tant que cette attaque.",
				de: "Wähle 1 Angriff des Verteidigenden Pokémon und verwende ihn als diesen Angriff."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "This extremely rare Pokémon is a different color than usual. It is very hard to find.",
		de: "Dieses sehr seltene Pokémon hat eine andere Farbe als üblich. Es ist sehr schwer zu finden."
	},

	thirdParty: {
		cardmarket: 280327,
		tcgplayer: 90753
	}
}

export default card
