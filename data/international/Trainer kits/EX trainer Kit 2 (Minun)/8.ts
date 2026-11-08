import { Card } from 'models/database/card'
import Set from '../EX trainer Kit 2 (Minun).ts'

const card: Card = {
	name: {
		'en-us': "Celio's Network",
		'fr-fr': "Le réseau de Cileo"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Trainer",
	set: Set,

	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one supporter card each turn. When you play this card, put it next to your Active Pokemon. When your turn ends, discard this card. Search your deck for a Basic Pokemon or Evolution card (excluding Pokemon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		'fr-fr': "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous jouez cette carte, placez-la à côté de votre Pokémon Actif. À la fin de votre tour, défaussez-la."
	},
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 277201,
				tcgplayer: 84155
			}
		},
	],

}

export default card
