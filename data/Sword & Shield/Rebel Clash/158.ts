import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Dan",
		fr: "Guido",
		es: "Paco Legiado",
		it: "Cicerone",
		pt: "Dan",
		de: "Stuart"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Draw 2 cards. You and your opponent play Rock-Paper-Scissors until someone wins. If you win, draw 2 more cards.",
		fr: "Piochez 2 cartes. Jouez à pierre-ciseaux-feuille avec votre adversaire jusqu’à avoir un gagnant. Si vous gagnez, piochez 2 cartes supplémentaires.",
		es: "Roba 2 cartas. Tu rival y tú jugáis a piedra, papel, tijeras hasta que gane uno de los dos. Si ganas tú, roba 2 cartas más.",
		it: "Pesca due carte. Tu e il tuo avversario giocate a morra cinese finché uno dei due non vince. Se vinci, pesca altre due carte.",
		pt: "Compre 2 cartas. Você e seu oponente jogam “pedra, papel e tesoura” até alguém vencer. Se você vencer, compre 2 cartas a mais.",
		de: "Ziehe 2 Karten. Du und dein Gegner spielt Schere/Stein/Papier, bis jemand gewinnt. Wenn du gewinnst, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
