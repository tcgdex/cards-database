import { Card } from 'models/database/card'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		'en-us': "Energy Restore",
		'fr-fr': "Restauration d'énergie",
		'de-de': "Energiewiederherstellung"
	},

	illustrator: "Hideyuki Nakajima",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Flip 3 coins. For each heads, put a basic Energy card from your discard pile into your hand. If you don't have that many basic Energy cards in your discard pile, put all of them into your hand.",
		'fr-fr': "Lancez trois pièces. Chaque fois que c'est face, prenez une carte Énergie de base dans votre pile de défausse, montrez-la à votre adversaire et placez-la dans votre main. Si vous n'avez pas suffisamment de cartes Énergie dans votre pile de défausse, placez toutes vos cartes Énergie dans votre main.",
		'de-de': "Wirf 3 Münzen. Nimme für jedes Mal, wenn die Münze 'Kopf' gezeigt hat, eine Basis-Energiekarte von deinem Ablagestapel auf deine Hand. Falls du nicht genug Basis-Energiekarten in deinem Ablagestapel hast, nimm so viele wie möglich auf deine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 277605,
		tcgplayer: 85227
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
