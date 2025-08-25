import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Stark Mountain",
		fr: "Mont Abrupt",
		de: "Kahlberg"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		de: "Einmal während seines Zuges kann jeder Spieler 1 - oder -Energie, die an 1 seiner Pokémon angelegt ist, entfernen und an 1 seiner - oder -Pokémon anlegen."
	},

	trainerType: "Stadium",

	thirdParty: {
		cardmarket: 278284,
		tcgplayer: 89519
	}
}

export default card
