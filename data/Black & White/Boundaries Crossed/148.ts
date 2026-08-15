import { Card } from '../../../interfaces'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		en: "Cheren",
		fr: "Tcheren",
		es: "Cheren",
		it: "Komor",
		pt: "Cheren",
		de: "Cheren"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Piochez 3 cartes.",
		en: "Draw 3 cards.",
		es: "Roba 3 cartas.",
		it: "Pesca tre carte.",
		pt: "Compre 3 cards.",
		de: "Ziehe 3 Karten. Du kannst während deines Zuges (vor deinem Angriff) nur 1 Unterstützerkarte spielen."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 280735,
		tcgplayer: 84250
	}
}

export default card
