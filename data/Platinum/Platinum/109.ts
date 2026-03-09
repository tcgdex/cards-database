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
		fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		de: "Look at your opponent's hand, then choose you or your opponent. That player shuffles his or her hand into his or her deck and draws up to 5 cards."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 278530,
		tcgplayer: 86822
	},

	variants:[
		{
			type:"normal"
		},
		{
			type:"reverse"
		},
		{
			type:"normal",
			stamp: ["jason-martinez"]
		},
		{
			type:"normal",
			stamp: ["michael-pramawat"]
		}
	]
}

export default card
