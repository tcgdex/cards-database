import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Fisherman",
		de: "Angler"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	set: Set,

	effect: {
		en: "You can play only 1 Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Choose 4 basic Energy cards from your discard pile (if there are fewer basic Energy cards than choose, take all of them), show them to your opponent, and put them into your hand.",
		de: "Wähle 4 Basis Energiekarten aus deinem Ablagestapel (falls dort weniger Basis Energiekarten vorhanden sind, nimm sie alle), zeige sie deinem Gegner und nimm sie auf deine Hand."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85471,
				cardmarket: 275383
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85471,
				cardmarket: 275383
			},
		},
	],
}

export default card
