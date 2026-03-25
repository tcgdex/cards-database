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
		fr: "Regardez la main de votre adversaire puis choisissez entre vous et votre adversaire. Ce joueur mélange sa main avec son deck et pioche jusqu'à 5 cartes.",
		de: "Look at your opponent's hand, then choose you or your opponent. That player shuffles his or her hand into his or her deck and draws up to 5 cards.",
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
