import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Energy Retrieval",
		pt: "Energy Retrieval",
		fr: "Sauvegarde d'Énergie",
		de: "Energiezugewinnung"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Trade 1 of the other cards in your hand for up to 2 basic Energy cards from your discard pile.",
		pt: "Troque 1 das outras cartas da sua mão por até 2 cartas de Energia básica da sua pilha de descarte.",
		fr: "Ajoutez à votre main jusqu'à 2 cartes Énergie de base de votre pile de défausse.[1]",
		de: "Tausche eine Karte auf Deiner Hand gegen bis zu 2 Basis-Energiekarten von Deinem Ablagestapel."
	}
}

export default card
