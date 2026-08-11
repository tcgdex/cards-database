import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Interviewer's Questions",
		'fr-fr': "Questionnaire d’interview",
		'de-de': "Befragung"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Regardez les 8 cartes du dessus de votre deck. Choisissez autant de cartes Énergie que vous le souhaitez, montrez-les à votre adversaire et ajoutez-les à votre main. Mélangez les autres cartes avec votre deck.",
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Look at the top 8 cards of your deck. Choose as many Energy cards as you like, show them to your opponent, and put them into your hand. Shuffle the other cards back into your deck.",
		'de-de': "Schau dir die obersten 8 Karten deines Decks an. Wähle beliebig viele Energiekarten, zeige sie deinem Gegner und nimm sie auf die Hand. Mische die anderen Karten anschließend in dein Deck."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279233,
				tcgplayer: 86286
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279233,
				tcgplayer: 86286
			}
		},
	],
}

export default card
