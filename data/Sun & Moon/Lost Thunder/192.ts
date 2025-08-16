import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Wait and See Hammer",
		fr: "Marteau Attends Voir",
		es: "Martillo Espera y Verás",
		it: "Martello Tattico",
		pt: "Martelo Esperar para Ver",
		de: "Geduldhammer"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Vous ne pouvez utiliser cette carte que si vous jouez en second et uniquement pendant votre premier tour. \n\nDéfaussez une Énergie de l’un des Pokémon de votre adversaire.",
		en: "You can use this card only if you go second, and only on your first turn. \n\nDiscard an Energy from 1 of your opponent’s Pokémon.",
		es: "Puedes usar esta carta solo si sales segundo, y solo en tu primer turno.\n\nDescarta 1 Energía de 1 de los Pokémon de tu rival.",
		it: "Puoi usare questa carta solo se inizi per secondo e solo durante il tuo primo turno.\n\nScarta un’Energia assegnata a uno dei Pokémon del tuo avversario.",
		pt: "Você só pode usar esta carta se for o segundo a jogar e somente na sua primeira vez de jogar. \n\nDescarte 1 Energia de 1 dos Pokémon do seu oponente.",
		de: "Du kannst diese Attacke nur einsetzen, wenn du als Zweiter am Zug bist, und nur während deines ersten Zuges. \n\nLege 1 Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 365825,
		tcgplayer: 179029
	}
}

export default card
