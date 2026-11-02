import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Looker's Investigation",
		fr: "L'enquête de Beladonis",
		de: "LeBelles Recherche"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Look at your opponent's hand, then choose you or your opponent. That player shuffles his or her hand into his or her deck and draws up to 5 cards.",
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Du kannst in jedem Zug nur eine Unterstützerkarte spielen. Wenn du diese Karte ausspielst, lege sie neben dein Aktives Pokémon. Lege diese Karte am Ende deines Zuges auf deinen Ablagestapel. Schau dir die Handkarten deines Gegners an, dann wähle einen Spieler (dich oder deinen Gegner). Der gewählte Spieler mischt seine Handkarten in sein Deck und zieht bis zu 5 Karten."
	},

	trainerType: "Supporter",

	variants: [		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86822,
				cardmarket: 278530
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278530,
				tcgplayer: 86822
			}
		},
		{
			type:"normal",
			stamp: ["jason-martinez"],
			thirdParty: {
				tcgplayer: 479909
			}
		},
		{
			type:"normal",
			stamp: ["michael-pramawat"],
			thirdParty: {
				tcgplayer: 480069
			}
		}
	],

	retreat: 0
}

export default card
