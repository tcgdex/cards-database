import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Bruno",
		fr: "Aldo",
		es: "Bruno",
		it: "Bruno",
		pt: "Bruno",
		de: "Bruno"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Shuffle your hand into your deck. Then, draw 4 cards. If any of your Pokémon were Knocked Out during your opponent’s last turn, draw 7 cards instead.",
		fr: "Mélangez votre main avec votre deck. Ensuite, piochez 4 cartes. Si au moins l’un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire, piochez 7 cartes à la place.",
		es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 4 cartas. Si alguno de tus Pokémon quedó Fuera de Combate durante el último turno de tu rival, roba 7 cartas en vez de 4.",
		it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca quattro carte. Se uno dei tuoi Pokémon è stato messo KO durante l’ultimo turno del tuo avversario, invece pescane sette.",
		pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 4 cartas. Se algum dos seus Pokémon tiver sido Nocauteado durante o último turno do seu oponente, compre 7 cartas ao invés de 4.",
		de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 4 Karten. Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners kampfunfähig wurde, ziehe stattdessen 7 Karten."
	},

	trainerType: "Supporter",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	illustrator: "Ryuta Fuse"
}

export default card