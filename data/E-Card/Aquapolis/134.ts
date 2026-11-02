import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Super Energy Removal 2",
		fr: "Super suppression d'énergie 2",
		de: "Super Energy Removal 2*"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Flip 2 coins. If both are heads, discard all Energy cards attached to the Defending Pokémon. If both are tails, discard all Energy cards attached to your Active Pokémon. If 1 is heads and 1 is tails, this card does nothing.",
		fr: "Lancez 2 pièces. Si vous obtenez 2 faces, défaussez-vous de toutes les cartes Énergie attachées au Pokémon Défenseur. Si vous obtenez 2 piles, défaussez-vous de toutes les cartes Énergie attachées à votre Pokémon Actif. Si l'une est face et l'autre est pile, cette carte ne fait rien.",
		de: "Wirf 2 Münzen. Falls beide „Kopf“ zeigen, lege alle an das Verteidigende Pokémon angelegten Energiekarten auf den Ablagestapel deines Gegners. Falls beide „Zahl“ zeigen, lege alle an dein Aktives Pokémon angelegten Energiekarten auf deinen Ablagestapel. Zeigt 1 „Kopf“ und 1 „Zahl“, hat dieser Angriff keine Auswirkungen."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 89627,
				cardmarket: 275210
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89627,
				cardmarket: 275210
			}
		},
	]
}

export default card
