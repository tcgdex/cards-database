import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Wally's Training",
		fr: "Timmy au dressage",
		de: "Heikos Training"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for a card that evolves from your Active Pokémon (choose 1 if there are 2) and put it on your Active Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.",
		fr: "Choisissez dans votre deck une carte qui évolue de votre Pokémon Actif (choisissez un Pokémon Actif si vous en avez deux) et placez-la sur ce Pokémon (Vous le faites ainsi évoluer). Ensuite, mélangez votre deck.",
		de: "Durchsuche dein Deck nach 1 Karte, die sich aus deinem Aktiven Pokémon entwickelt (wähle 1, falls 2 vorhanden sind) und lege sie auf dein Aktives Pokémon. (Das zählt als Entwickeln des gewählten Pokémon.) Mische dein Deck danach.",
	},

	thirdParty: {
		cardmarket: 275866,
		tcgplayer: 90464
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			subtype: "no-e-reader"
		},
		{
			type: "normal",
			stamp: ["reed-weichler"]
		}
	]
}

export default card
