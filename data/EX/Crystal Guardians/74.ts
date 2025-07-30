import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Cessation Crystal",
		fr: "Arrêt de cristal",
		de: "Kristall des Stillstandes"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Arrêt de cristal à 1 de vos Pokémon (Pokémon-ex exclus) qui ne possède pas déjà d'Outil Pokémon. Si le Pokémon auquel Arrêt de cristal est attachée est un Pokémon-ex, défaussez cette carte.\n\nTant qu'Arrêt de cristal est attachée à un Pokémon Actif, les Pokémon de chaque joueur (les vôtres et ceux de votre adversaire) ne peuvent pas utiliser de Poké-Powers ou de Poké-Bodies.",
		de: "Solange Kristall des Stillstandes an einem Aktiven Pokémon anliegt, können Pokémon (deine und die deines Gegners) keine Poké-Power und Poké-Body benutzen."
	},

	thirdParty: {
		cardmarket: 277155
	}
}

export default card
