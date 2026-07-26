import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Professor Oak's New Theory",
		fr: "Nouvelle théorie du Prof. Chen",
		de: "Professor Eichs neue Theorie"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez jouer qu’une carte Supporter à chaque tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon actif. Une fois votre tour terminé, défaussez-vous de cette carte.",
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Shuffle your hand into your deck. Then, draw 6 cards.",
		de: "Mische deine Handkarten in dein Deck. Ziehe danach 6 Karten."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279073,
				tcgplayer: 88400
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88400
			}
		},
		{
			type: "reverse",
			foil: "professor-program",
			thirdParty: {
				tcgplayer: 00000
			}
		},
		{
			type: "normal",
			stamp : ["yuta-komatsuda"],
			thirdParty: {
				tcgplayer: 00000
			}
		},
		{
			type: "normal",
			stamp : ["gustavo-wada"],
			thirdParty: {
				tcgplayer: 00000
			}
		},
		{
			type: "normal",
			stamp : ["christopher-kan"],
			thirdParty: {
				tcgplayer: 00000
			}
		},
		{
			type: "normal",
			stamp : ["igor-costa"],
			thirdParty: {
				tcgplayer: 00000
			}
		},
	],

	hp: 0
	retreat: 0
}

export default card
