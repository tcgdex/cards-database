import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Juggler",
		'fr-fr': "Jongleur",
		'de-de': "Jongleur"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	set: Set,

	effect: {
		'en-us': "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Discard up to 2 basic Energy cards from your hand. If you discarded 1 basic Energy card, draw 3 cards. If you discarded 2 basic Energy cards, draw 5 cards.",
		'fr-fr': "Défaussez -vous de jusqu'à 2 cartes Énergies de base de votre main. Si vous vous êtes défaussé d'une carte Énergie de base, piochez 3 cartes. Si vous vous êtes défaussé de 2 cartes Énergie de base, piochez 5 cartes.",
		'de-de': "Lege bis zu 2 Basis-Energiekarten aus deiner Hand auf deinen Ablagestapel. Hast du auf diese Weise 1 Basis-Energiekarte abgelegt, ziehe 3 Karten. Hast du auf diese Weise 2 Basis-Energiekarten abgelegt, ziehe 5 Karten."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86360,
				cardmarket: 275202
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86360,
				cardmarket: 275202
			}
		},
	]
}

export default card
