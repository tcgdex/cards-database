import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Zoroark",
		fr: "Zoroark",
		es: "Zoroark",
		it: "Zoroark",
		pt: "Zoroark",
		de: "Zoroark"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
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
				fr: "Cherchez une carte dans votre deck et ajoutez-la à votre main. Mélangez ensuite votre deck.",
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
				fr: "Choisissez 1 des attaques du Pokémon Défenseur et utilisez-la à la place de cette attaque.",
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
		en: "Each has the ability to fool a large group of people simultaneously. They protect their lair with illusory scenery.",
		de: "Kann auf einen Schlag große Massen von Menschen täuschen. Es kreiert Illusionen, um sein Revier zu schützen."
	},

	thirdParty: {
		cardmarket: 279809,
		tcgplayer: 90749
	}
}

export default card
