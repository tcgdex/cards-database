import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Juggler",
		fr: "Jongleur",
		de: "Jongleur"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Discard up to 2 basic Energy cards from your hand. If you discarded 1 basic Energy card, draw 3 cards. If you discarded 2 basic Energy cards, draw 5 cards.",
		fr: "Défaussez -vous de jusqu'à 2 cartes Énergies de base de votre main. Si vous vous êtes défaussé d'une carte Énergie de base, piochez 3 cartes. Si vous vous êtes défaussé de 2 cartes Énergie de base, piochez 5 cartes.",
		de: "Lege bis zu 2 Basis-Energiekarten aus deiner Hand auf deinen Ablagestapel. Hast du auf diese Weise 1 Basis-Energiekarte abgelegt, ziehe 3 Karten. Hast du auf diese Weise 2 Basis-Energiekarten abgelegt, ziehe 5 Karten.",
	},

	thirdParty: {
		cardmarket: 275202,
		tcgplayer: 86360
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
