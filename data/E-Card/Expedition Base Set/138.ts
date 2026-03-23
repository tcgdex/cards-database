import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Copycat",
		fr: "Copieuse",
		de: "Nachahmerin"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez votre main avec votre deck. Comptez ensuite le nombre de cartes dans la main de votre adversaire et piochez autant de cartes.",
		de: "Mische deine Hand in dein Deck. Zähle dann die Anzahl an Karten auf der Hand deines Gegners und ziehe so viele Karten.",
	},

	thirdParty: {
		cardmarket: 275013,
		tcgplayer: 84423
	},

	variants:[
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["chris-fulop"]
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"]
		},
		{
			type: "normal",
			stamp: ["reed-weichler"]
		}
	]
}

export default card
