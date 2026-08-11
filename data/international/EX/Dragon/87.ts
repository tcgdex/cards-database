import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Mr. Briney's Compassion",
		'fr-fr': "La compassion de M. Briney",
		'de-de': "Mr. Bracks Mitgefühl"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Supporter",

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Choose 1 of your Pokémon in play (excluding Pokémon-ex). Return that Pokémon and all cards attached to it to your hand.",
		'fr-fr': "Choisissez un des Pokémon que vous avez en jeu (sauf les Pokémon-ex). Reprenez dans votre main ce Pokémon ainsi que toutes les cartes qui lui sont attachées.",
		'de-de': "Choose 1 of your Pokémon in play (excluding Pokémon-ex). Return that Pokémon and all cards attached to it to your hand.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87585,
				cardmarket: 275964
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87585,
				cardmarket: 275964
			},
		},
	],

}

export default card
