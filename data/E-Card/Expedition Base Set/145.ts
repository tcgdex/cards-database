import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Pokémon Nurse",
		fr: "Infirmière Pokémon",
		de: "Pokémon-Krankenschwester"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "You can play only one Supporter card each turn. When you play this card, put it next to your Active Pokémon. When your turn ends, discard this card. Remove all damage counters from 1 of your Pokémon. Then discard all Energy cards attached to it, if any.",
		fr: "Retirez tous les marqueurs de dégâts d'un de vos Pokémon. Défaussez -vous ensuite de toutes les cartes Énergie qui lui sont attachées, s'il en possède.",
		de: "Entferne alle Schadensmarken von einem deiner Pokémon. Lege dann alle an es angelegten Energiekarten auf deinen Ablagestapel.",
	},

	thirdParty: {
		cardmarket: 275020
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
		}
	]
}

export default card
