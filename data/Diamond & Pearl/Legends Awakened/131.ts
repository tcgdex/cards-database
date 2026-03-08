import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Cynthia's Feelings",
		fr: "Les sentiments de Cynthia",
		de: "Cynthias Gefühle"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Mische deine Handkarten in dein Deck. Ziehe danach 4 Karten. Wenn mindestens 1 deiner Pokémon im letzten Zug deines Gegners kampfunfähig wurde, ziehe 4 weitere Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278280,
		tcgplayer: 84555
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["stephen-silvestro"]
		},
		{
			type: "normal",
			stamp: ["mychael-bryan"]
		}
	]
}

export default card
