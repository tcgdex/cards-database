import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Judge",
		fr: "Juge",
		de: "Richter"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Chaque joueur mélange sa main avec son deck, puis pioche 4 cartes (c’est vous qui piochez en premier).",
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Each player shuffles his or her hand into his or her deck and draws 4 cards.",
		de: "Du kannst in jedem Zug nur eine Unterstützerkarte spielen. Wenn du diese Karte ausspielst, lege sie neben dein Aktives Pokémon. Lege diese Karte am Ende deines Zuges auf deinen Ablagestapel. Jeder Spieler mischt seine Handkarten in sein Deck und zieht 4 Karten."
	},

	trainerType: "Supporter",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86359,
				cardmarket: 279234
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86359,
				cardmarket: 279234
			}
		},
		{
			type: 'reverse',
			foil: 'league',
			thirdParty: {
				cardmarket: 449093,
				tcgplayer: 123183,
			}
		},
		{
			type: "normal",
			stamp: ["michael-pramawat"],
			thirdParty: {
				cardmarket: 868764,
				tcgplayer: 480056
			}
		},
		{
			type: "normal",
			stamp: ["yuka-furusawa"],
			thirdParty: {
				cardmarket: 868765,
				tcgplayer: 480057
			}
		},
		{
			type: "normal",
			stamp: ["gustavo-wada"],
			thirdParty: {
				cardmarket: 868208,
				tcgplayer: 480410
			}
		}
	],

	hp: 0,

}

export default card
