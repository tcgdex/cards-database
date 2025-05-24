import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Pokédex",
		pt: "Pokédex",
		fr: "Pokédex",
		de: "Pokédex"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Look at up to 5 cards from the top of your deck and rearrange them as you like.",
		pt: "Olhe até 5 cartas do topo do seu baralho e reorganize-as como quiser.",
		fr: "Regardez jusqu'à 5 des 5 premières cartes du dessus de votre deck et triez-les comme bon vous semble.",
		de: "Schaue Dir bis zu fünf der obersten Karten Deines Stapels an und lege sie in beliebiger Reihenfolge wieder in Deinen Stapel zurück."
	}
}

export default card
