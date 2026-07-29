import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Sage's Training",
		fr: "Entraînement de Sage",
		de: "Training des Weisen"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Look at the top 5 cards of your deck. Choose any 2 cards you find there and put them into your hand. Discard the other cards.",
		de: "Schau dir die obersten 5 Karten deines Decks an. Wähle 2 beliebige der gefundenen Karten und nimm sie auf die Hand. Lege die anderen Karten auf deinen Ablagestapel.",
		fr: "Regardez les 5 cartes du dessus de votre deck. Choisissez-en 2 et ajoutez-les à votre main. Défaussez les autres cartes.",
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88894,
				cardmarket: 279728
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88894,
				cardmarket: 279728
			},
		},
	],

}

export default card
