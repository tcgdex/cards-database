import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Recycle Energy",
		fr: "Énergie recyclable",
		de: "Recycle-Energie"
	},

	illustrator: "Hideki Kazama",
	rarity: "Rare",
	category: "Energy",
	set: Set,
	energyType: "Special",

	effect: {
		en: "Recycle Energy provides Colorless Energy. (Doesn't count as a basic Energy card.) If this card is put into your discard pile from play, return it to your hand.",
		de: "Recycle-Energie liefert -Energie. (Zählt nicht als Basis-Energiekarte.)Falls diese Karte aus dem Spiel auf deinen Ablagestapel gelegt wird, nimm sie wiede auf deine Hand zurück."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274505,
				tcgplayer: 88654
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274505,
				tcgplayer: 88654
			}
		}
	]
}

export default card
