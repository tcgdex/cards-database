import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Windstorm",
		fr: "Tempête",
		de: "Sturmwind"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		fr: "Choisissez jusqu'à 2 cartes parmi les cartes Outil Pokémon et les cartes Stade en jeu (les vôtres et celles de votre adversaire) et défaussez-les.",
		de: "Wähle 2 Karten in beliebiger Kombination aus sich im Spiel befindlichen Pokémon-Ausrüstungs-Karten und Stadion-Karten (deine oder deines Gegners). Lege diese Karten auf den Ablagestapel."
	},

	thirdParty: {
		cardmarket: 277166
	}
}

export default card
