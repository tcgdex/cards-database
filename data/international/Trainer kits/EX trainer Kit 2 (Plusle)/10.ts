import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Plusle)'

const card: Card = {
	name: {
		en: "Professor Cozmo's Discovery",
		fr: "La découverte du Professeur Kosmo"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Flip a coin. If heads, draw the bottom 3 cards of your deck. If tails, draw the top 2 cards of your deck.",
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la."
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88385
			}
		},
	],

}

export default card
