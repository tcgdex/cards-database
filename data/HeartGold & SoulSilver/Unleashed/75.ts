import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Engineer’s Adjustments",
		fr: "Réglages techniques",
		de: "Ingenieurkniffe"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Défaussez une carte Énergie de votre main. Piochez 4 cartes dans votre deck.",
		en: "Discard an Energy card from your hand. Then. draw 4 cards.",
		de: "Lege 1 Energiekarte von deiner Hand auf deinen Ablagestapel. Ziehe 4 Karten."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["christopher-kan"],
		}
	],

	hp: 0
}

export default card
