import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Item Finder",
		pt: "Item Finder",
		fr: "Récupérateur",
		de: "Detektor"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Discard 2 of the other cards from your hand in order to put a Trainer card from your discard pile into your hand.",
		pt: "Descarte 2 das outras cartas da sua mão para colocar uma carta de Treinador da sua pilha de descarte na sua mão.",
		fr: "Défaussez 2 des autres cartes de votre main pour placer une carte Dresseur de votre pile de défausse dans votre main.",
		de: "Entferne 2 Karten Deiner Hand, um eine Trainerkarte aus Deinem Ablagestapel aufzunehmen."
	}
}

export default card
