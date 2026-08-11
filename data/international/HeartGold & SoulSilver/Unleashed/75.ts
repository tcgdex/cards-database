import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Engineer's Adjustments",
		fr: "Réglages techniques",
		de: "Ingenieurkniffe"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez une carte Énergie de votre main. Piochez 4 cartes dans votre deck.",
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Discard an Energy card from your hand. Then, draw 4 cards.",
		de: "Lege 1 Energiekarte von deiner Hand auf deinen Ablagestapel. Ziehe 4 Karten."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279231,
				tcgplayer: 85264
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85264
			}
		},
		{
			type: "normal",
			stamp: ["christopher-kan"],
			thirdParty: {
				cardmarket: 868178,
				tcgplayer: 480393
			}
		}
	],
}

export default card
