import { Card } from 'models/database/card'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		'en-us': "Pokémon Fan Club",
		'fr-fr': "Fan Club Pokémon"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
		'fr-fr': "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.\n\nChoisissez dans votre deck jusqu'à 2 Pokémon de base et placez-les sur votre Banc. Ensuite, mélangez votre deck."
	},

	trainerType: "Supporter",
	
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88226,
				cardmarket: 277474
			},
		},
	],

}

export default card
