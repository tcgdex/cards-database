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
