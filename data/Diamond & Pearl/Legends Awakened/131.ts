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
		fr: "Mélangez votre main à votre deck. Ensuite, piochez 4 cartes. Si n'importe lequel de vos Pokémon a été mis K.O lors du tour précédent de votre adversaire, piochez 4 cartes supplémentaires.",
		de: "Mische deine Handkarten in dein Deck. Ziehe danach 4 Karten. Wenn mindestens 1 deiner Pokémon im letzten Zug deines Gegners kampfunfähig wurde, ziehe 4 weitere Karten.",
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
