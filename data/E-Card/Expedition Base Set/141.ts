import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

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
		fr: "Lancez 3 pièces. Pour chaque face, ajoutez une carte Énergie de votre pile de défausse à votre main. Si vous n'avez pas suffisamment de cartes Énergie de base dans votre pile de défausse, ajoutez-les toutes à votre main.",
		de: "Wirf 3 Münzen. Nimm für jeden 'Kopf' eine Basis-Energiekarte von deinem Ablagestapel auf deine Hand. Falls du nicht genug Basis-Energiekarten in deinem Ablagestapel hast, nimm so viele wie möglich auf deine Hand."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85226,
				cardmarket: 275016
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85226,
				cardmarket: 275016
			},
		},
	],
}

export default card
