import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Night Pokémon Center",
		fr: "Centre Pokémon de Nuit",
		de: "Pokémon-Nachtcenter"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Choose 1 of your Pokémon. Flip 2 coins. If both are heads, remove all damage counters from that Pokémon. If both are tails, discard all Energy cards attached to that Pokémon.",
		fr: "Choisissez 1 de vos Pokémon. Lancez 2 pièces. Si ce sont deux faces, retirez à ce Pokémon tous ses marqueurs de dégât. Si ce sont deux piles, défaussez toutes les cartes Énergie attachées à ce Pokémon.",
		de: "Wähle 1 deiner Pokémon. Wirf 2 Münzen. Wenn beide 'Kopf' gezeigt haben, entferne alle Schadensmarken von diesem Pokémon. Wenn beide 'Zahl' gezeigt haben, lege alle Energiekarten, die an dieses Pokémon angelegt sind, auf deinen Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 277607
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
