import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Black Belt",
		fr: "Karatéka",
		de: "Schwarzgurt"
	},

	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous pouvez utiliser cette carte uniquement s’il vous reste plus de cartes Récompense que votre adversaire. Pendant ce tour, chaque attaque de votre Pokémon Actif inflige 40 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		en: "You may use this card only if you have more Prize cards left than your opponent. During this turn, each of your Active Pokémon’s attacks does 40 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
		de: "Du darfst diese Karte nur spielen, wenn du mehr Preise übrig hast als dein Gegner. Während dieses Zuges fügt jeder Angriff deines Aktiven Pokémon den Aktiven Pokémon des Gegners 40 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Supporter",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	hp: 0,

	thirdParty: {
		cardmarket: 279615
	}
}

export default card
