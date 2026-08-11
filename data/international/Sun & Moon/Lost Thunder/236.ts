import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Wait and See Hammer",
		'fr-fr': "Marteau Attends Voir",
		'es-es': "Martillo Espera y Verás",
		'it-it': "Martello Tattico",
		'pt-br': "Martelo Esperar para Ver",
		'de-de': "Geduldhammer"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Secret Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Vous ne pouvez utiliser cette carte que si vous jouez en second et uniquement pendant votre premier tour. \n\nDéfaussez une Énergie de l’un des Pokémon de votre adversaire.",
		'en-us': "You can use this card only if you go second, and only on your first turn. \n\nDiscard an Energy from 1 of your opponent’s Pokémon.",
		'es-es': "Puedes usar esta carta solo si sales segundo, y solo en tu primer turno.\n\nDescarta 1 Energía de 1 de los Pokémon de tu rival.",
		'it-it': "Puoi usare questa carta solo se inizi per secondo e solo durante il tuo primo turno.\n\nScarta un’Energia assegnata a uno dei Pokémon del tuo avversario.",
		'pt-br': "Você só pode usar esta carta se for o segundo a jogar e somente na sua primeira vez de jogar. \n\nDescarte 1 Energia de 1 dos Pokémon do seu oponente.",
		'de-de': "Du kannst diese Attacke nur einsetzen, wenn du als Zweiter am Zug bist, und nur während deines ersten Zuges. \n\nLege 1 Energie von 1 Pokémon deines Gegners auf seinen Ablagestapel."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 365870,
		tcgplayer: 179068
	}
}

export default card
