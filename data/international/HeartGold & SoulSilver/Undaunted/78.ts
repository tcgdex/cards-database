import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Team Rocket's Trickery",
		'fr-fr': "Fourberie de la Team Rocket",
		'de-de': "Team Rockets Trickserei"
	},

	illustrator: "Takao Unno",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez 2 cartes. Ensuite, votre adversaire défausse une carte de sa main.",
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw 2 cards. Then, your opponent discards a card from his or her hand.",
		'de-de': "Ziehe 2 Karten. Anschließend legt dein Gegner 1 seiner Handkarten auf seinen Ablagestapel."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279331,
				tcgplayer: 89852
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279331,
				tcgplayer: 89852
			}
		},
	],

	hp: 0,
	retreat: 0
}

export default card
