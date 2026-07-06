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
	thirdParty: {
		tcgplayer: 86271
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
