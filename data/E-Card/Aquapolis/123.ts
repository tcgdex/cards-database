import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Forest Guardian",
		fr: "Gardien de la forêt",
		de: "Waldwächter"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Shuffle your deck. Then, look at the top 7 cards of your deck. Choose 1 of those cards and put it into your hand. Shuffle the rest into your deck afterward.",
		fr: "Mélangez votre deck. Regardez ensuite les 7 cartes du dessus de votre deck. Choisissez une de ces cartes et ajoutez-la à votre main. Mélangez ensuite le reste à votre deck.",
		de: "Mische dein Deck. Schaue dir dann die 7 obersten Karten deines Decks an. Wähle 1 dieser Karten und nimm sie auf deine Hand. Mische danach die anderen Karten in dein Deck.",
	},

	thirdParty: {
		cardmarket: 275199,
		tcgplayer: 85541
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
