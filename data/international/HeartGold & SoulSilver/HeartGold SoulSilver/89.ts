import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Bill",
		'fr-fr': "Leo",
		'de-de': "Bill"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Vous ne pouvez jouer qu’une carte Supporter à chaque tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon actif. Une fois votre tour terminé, défaussez-vous de cette carte.",
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Draw 2 cards.",
		'de-de': "Ziehe 2 Karten."
	},

	trainerType: "Supporter",

	hp: 0,

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83832,
				cardmarket: 279061
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 83832,
				cardmarket: 279061
			}
		},
	],

}

export default card
