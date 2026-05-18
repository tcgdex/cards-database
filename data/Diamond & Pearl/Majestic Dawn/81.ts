import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Energy Restore",
		fr: "Restauration d'énergie",
		de: "Energiewiederherstellung"
	},

	illustrator: "Hideyuki Nakajima",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip 3 coins. For each heads, put a Basic Energy card from your discard pile into your hand. If you don't have that many basic Energy cards in your discard pile, put all of them into your hand.",
		fr: "Lancez 3 pièces. Pour chaque face, placez une carte Énergie de base de votre pile de défausse dans votre main. Si vous ne possédez pas autant de cartes Énergie de base dans votre pile de défausse, placez-les toutes dans votre main.",
		de: "Wirf 3 Münzen. Nimm für jedes Mal, wenn die Münze \"Kopf\" gezeigt hat, eine Basis-Energiekarte von deinem Ablagestapel auf deine Hand. Falls du nicht genug Basis-Energiekarten in deinem Ablagestapel hast, nimm so viele wie möglich auf die Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 278130,
		tcgplayer: 85228
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
