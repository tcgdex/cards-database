import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Impostor Professor Oak",
		fr: "Faux Professeur Chen",
		de: "Falscher Professor Eich",
		it: "Professor Oak, l'impostore"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Your opponent shuffles his or her hand into his or her deck, then draws 7 cards.",
		fr: "Votre adversaire mélange sa main avec son deck, puis pioche 7 cartes.",
		de: "Dein Gegner mischt die Karten seiner Hand in seinen Stapel und zieht sieben neue Karten",
		it: "Il tuo avversario rimette le carte che ha in mano nel proprio mazzo, le mischia e poi pesca 7 carte."
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				tcgplayer: 86271
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107070
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107070
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
