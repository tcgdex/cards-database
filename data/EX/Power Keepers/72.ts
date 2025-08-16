import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Drake's Stadium",
		fr: "Stade d'Aragon",
		de: "Dragans Stadion"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nTous dégâts infligés aux Pokémon Actifs  (les vôtres et ceux de votre adversaire) par une attaque de votre adversaire sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
		de: "Alle Schadenspunkte, die Aktiven -Pokémon (deine und die deines Gegners) durch einen gegnerischen Angriff zugefügt werden, werden um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
	},

	thirdParty: {
		cardmarket: 277378,
		tcgplayer: 84921
	}
}

export default card
