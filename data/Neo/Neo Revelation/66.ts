import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Shining Magikarp",
		fr: "Magicarpe Brillant",
		de: "Schimmerndes Karpador"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Gold Scale",
				fr: "Écaille d'or",
				de: "Goldschuppen"
			},
			effect: {
				en: "Your opponent may draw 2 cards. Either way, you may draw 2 cards.",
				fr: "Votre adversaire peut piocher 2 cartes. Quoi qu'il décide, vous pouvez aussi piocher 2 cartes.",
				de: "Dein Gegner darf 2 Karten ziehen. Unabhängig davon darfst du 2 Karten ziehen."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Dragon Bond",
				fr: "Lien du Dragon",
				de: "Drachenbund"
			},
			effect: {
				en: "Search your deck for a card named Gyarados, Dark Gyarados, or Shining Gyarados. Show it to your opponent and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez une carte Léviator, Léviator Obscur ou Léviator Brillant dans votre deck. Montrez-la à votre adversaire et placez-la dans votre main. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach einer Karte namens Garados, Dunkles Garados oder Schimmerndes Garados. Zeige diese Karte deinem Gegner und nimm sie auf deine Hand. Mische danach dein Deck."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		fr: "Un Pokémon faible et pathétique. Il lui arrive de temps en temps de parvenir à sauter assez haut, mais il ne monte jamais au-delà de 2m."
	},

	thirdParty: {
		cardmarket: 274652,
		tcgplayer: 89166
	}
}

export default card
