import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Interviewer's Questions",
		fr: "Questionnaire d'interview",
		de: "Befragung"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Look at the top 8 cards of your deck. Choose as many Energy cards as you like, show them to your opponent, and put them into your hand. Shuffle the other cards back into your deck.",
		de: "Schau dir die obersten 8 Karten deines Decks an. Wähle beliebig viele Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische die anderen Karten anschließend in dein Deck.",
		fr: "Regardez les 8 cartes du dessus de votre deck. Choisissez autant de cartes Énergie que vous le souhaitez, montrez-les à votre adversaire et ajoutez-les à votre main. Mélangez les autres cartes avec votre deck.",
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86287,
				cardmarket: 279722
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86287,
				cardmarket: 279722
			},
		},
	],

}

export default card
