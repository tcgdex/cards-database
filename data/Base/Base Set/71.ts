import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Computer Search",
		pt: "Pesquisa no computador",
		fr: "Recherche informatique",
		de: "Computersuche"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Discard 2 of the other cards from your hand in order to search your deck for any card and put it into your hand. Shuffle your deck afterward.",
		pt: "Descarte 2 das outras cartas da sua mão para procurar no seu baralho por qualquer carta e colocá-la na sua mão. Embaralhe seu baralho depois.",
		fr: "Défaussez 2 des autres cartes de votre main pour chercher n'importe quelle carte dans votre deck et la placer dans votre main. Ensuite, mélangez votre deck.",
		de: "Entferne 2 Karten aus deiner Hand, um im Stapel nach einer beliebigen Karte zu suchen. Nimm die gewählte Karte auf Deiner Hand und mische danach den Stapel."
	}
}

export default card
