import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wash Rotom",
		'fr-fr': "Motisma Lavage",
		'es-es': "Rotom Lavado",
		'it-it': "Rotom Lavaggio",
		'de-de': "Wasch-Rotom",
		'pt-br': "Rotom Lavagem",
		'ko-kr': "워시로토무"
	},

	illustrator: "Saboteri",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [479],
	hp: 80,
	types: ["Water"],

	description: {
		'en-us': "This Rotom has entered a washing machine. It nods with satisfaction after it floods the surrounding area.",
		'fr-fr': "Ce Motisma a pris possession d'une machine à laver.\nIl provoque des inondations puis hoche la tête d'un air satisfait.",
		'es-es': "Asume esta forma cuando toma posesión\nde una lavadora. Inunda todo a su alrededor\npara acto seguido asentir con satisfacción.",
		'it-it': "Ha assunto questa forma entrando in una lavatrice.\nInonda i dintorni per poi annuire soddisfatto.",
		'de-de': "Dieses Rotom ist in eine Waschmaschine\neingedrungen. Es setzt alles um sich herum\nunter Wasser und nickt dann selbstgefällig.",
		'pt-br': "Este Rotom entrou em uma máquina de lavar.\nAcena com a cabeça com satisfação após inundar\nos arredores.",
		'ko-kr': "세탁기에 들어간 모습.\n주변을 침수시키고는\n만족스러운 듯이 끄덕이고 있다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'es-es': "Chapoteo Ondulante",
			'it-it': "Schizzi d'Onda",
			'de-de': "Wellenplatscher",
			'pt-br': "Onda Borrifante",
			'ko-kr': "스플래시"
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
