import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Luxury Ball",
		'fr-fr': "Luxe Ball",
		'de-de': "Luxusball"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Search your deck for a Pokémon (excluding Pokémon LV.X), show it to your opponent, and put it into your hand. Shuffle your deck afterward. If any Luxury Ball is in your discard pile, you can't play this card.",
		'fr-fr': "Choisissez un Pokémon dans votre deck (Pokémon NIV.X exclus), montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. Si Luxe Ball se trouve dans votre pile de défausse, vous ne pouvez pas jouer cette carte.",
		'de-de': "Durchsuche dein Deck nach 1 Pokémon-Karte (außer Pokémon LV.X), zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach. Wenn sich mindestens 1 Luxusball in deinem Ablagestapel befindet, kannst du diese Karte nicht spielen."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278384,
		tcgplayer: 86953
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["stephen-silvestro"]
		},
		{
			type: "normal",
			stamp: ["jason-martinez"]
		},
		{
			type: "normal",
			stamp: ["david-cohen"]
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"]
		},
		{
			type: "normal",
			stamp: ["yuta-komatsuda"]
		},
		{
			type: "normal",
			stamp: ["yuka-furusawa"]
		},
	]
}

export default card
