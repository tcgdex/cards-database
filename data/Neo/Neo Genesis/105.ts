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
		de: "Recycle-Energie liefert -Energie. (Zählt nicht als Basis-Energiekarte.)Falls diese Karte aus dem Spiel auf deinen Ablagestapel gelegt wird, nimm sie wiede auf deine Hand zurück."
	}
}

export default card
