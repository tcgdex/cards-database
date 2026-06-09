import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Lure Ball",
		de: "Köder Ball"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip 3 coins. For each heads, choose an Evolution card from your discard pile, show it to your opponent, and put it into your hand.",
		de: "Wirf 3 Münzen. Bei jedem \"Kopf\" wähle eine Entwicklungskarte aus deinem Ablagestapel, zeige sie deinem Gegner und nimm sie auf deine Hand."
	},

	thirdParty: {
		cardmarket: 275386,
		tcgplayer: 86931
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
