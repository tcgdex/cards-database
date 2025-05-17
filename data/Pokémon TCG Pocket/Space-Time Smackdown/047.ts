import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Wash Rotom",
		fr: "Motisma Lavage",
		es: "Rotom Lavado",
		it: "Rotom Lavaggio",
		de: "Wasch-Rotom",
		'pt-br': "Rotom Lavagem",
		ko: "워시로토무"
	},

	illustrator: "Saboteri",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		en: "This Rotom has entered a washing machine. It nods with satisfaction after it floods the surrounding area.",
		fr: "Ce Motisma a pris possession d'une machine à laver.\nIl provoque des inondations puis hoche la tête d'un air satisfait.",
		es: "Asume esta forma cuando toma posesión\nde una lavadora. Inunda todo a su alrededor\npara acto seguido asentir con satisfacción.",
		it: "Ha assunto questa forma entrando in una lavatrice.\nInonda i dintorni per poi annuire soddisfatto.",
		de: "Dieses Rotom ist in eine Waschmaschine\neingedrungen. Es setzt alles um sich herum\nunter Wasser und nickt dann selbstgefällig.",
		'pt-br': "Este Rotom entrou em uma máquina de lavar.\nAcena com a cabeça com satisfação após inundar\nos arredores.",
		ko: "세탁기에 들어간 모습.\n주변을 침수시키고는\n만족스러운 듯이 끄덕이고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
			es: "Chapoteo Ondulante",
			it: "Schizzi d'Onda",
			de: "Wellenplatscher",
			'pt-br': "Onda Borrifante",
			ko: "스플래시"
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["dialga", "palkia"]
}

export default card
