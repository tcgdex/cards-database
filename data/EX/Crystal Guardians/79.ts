import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Holon Circle",
		fr: "Cercle Holon",
		de: "Holon-Kreis"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Stadium",

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.\n\nPrévenez tous les effets d'une attaque, dégâts inclus, infligés par les Pokémon Actifs de chaque joueur. Si un Pokémon Actif utilise une attaque, cette attaque se termine. Défaussez cette carte.",
		de: "Verhindere alle Effekte von Angriffen, inklusive Schaden, die durch Aktive Pokémon (deins oder das deines Gegners) verursacht werden. Wenn ein Aktives Pokémon einen Angriff einsetzt, wird dieser Angriff ohne Auswirkungen beendet und der Holon-Kreis auf deinen Ablagestapel gelegt."
	},

	thirdParty: {
		cardmarket: 277160
	}
}

export default card
