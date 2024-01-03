import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Cynthia's Ambition",
		fr: "Ambition de Cynthia",
		es: "Ambición de Cintia",
		it: "Ambizione di Camilla",
		pt: "Ambição da Cíntia",
		de: "Cynthias Ehrgeiz"
	},

	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		en: "Draw cards until you have 5 cards in your hand. If any of your Pokémon were Knocked Out during your opponent's last turn, draw cards until you have 8 cards in your hand instead.",
		fr: "Piochez des cartes jusqu'à en avoir 5 en main. Si au moins l'un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire, piochez des cartes jusqu'à en avoir 8 en main à la place.",
		es: "Roba cartas hasta que tengas 5 cartas en tu mano. Si alguno de tus Pokémon quedó Fuera de Combate durante el último turno de tu rival, roba cartas hasta que tengas 8 cartas en tu mano en vez de 5.",
		it: "Pesca fino ad avere cinque carte in mano. Se uno qualsiasi dei tuoi Pokémon è stato messo KO durante l'ultimo turno del tuo avversario, invece pesca fino ad avere otto carte in mano.",
		pt: "Compre cartas até ter 5 cartas na sua mão. Se algum dos seus Pokémon tiver sido Nocauteado durante o último turno do seu oponente, compre cartas até ter 8 cartas na sua mão ao invés de 5.",
		de: "Ziehe so lange Karten, bis du 5 Karten auf deiner Hand hast. Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners kampfunfähig wurde, ziehe stattdessen so lange Karten, bis du 8 Karten auf deiner Hand hast."
	},

	trainerType: "Supporter",
	regulationMark: "F",
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card