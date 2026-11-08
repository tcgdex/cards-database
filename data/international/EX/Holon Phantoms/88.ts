import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Mr. Stone's Project",
		'fr-fr': "Le projet de M. Rochard",
		'de-de': "Mr. Trumms Projekt"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for up to 2 basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward. Or, search your discard pile for up to 2 basic Energy cards, show them to your opponent, and put them into your hand.",
		'fr-fr': "Choisissez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck. Ou, choisissez dans votre pile de défausse jusqu'à 2 cartes Énergie de base, montrez-les à votre adversaire et placez-les dans votre main.",
		'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach. Oder: Durchsuche deinen Ablagestapel nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand.",
	},

	thirdParty: {
		cardmarket: 277058,
		tcgplayer: 87601
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
