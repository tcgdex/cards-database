import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Aipom",
		'fr-fr': "Capumain",
		'es-es': "Aipom",
		'it-it': "Aipom",
		'de-de': "Griffel",
		'pt-br': "Aipom",
		'ko-kr': "에이팜"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [190],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "As it did more and more with its tail, its hands became clumsy. It makes its nest high in the treetops.",
		'fr-fr': "À force d'utiliser sa queue à tort et à travers,\nelle est devenue plus habile que ses mains.\nIl l'utilise pour faire son nid en haut des arbres.",
		'es-es': "De tanto utilizar la cola, esta se ha vuelto más hábil que sus\ndedos. Construye sus nidos en las copas de los árboles.",
		'it-it': "Poiché utilizza la coda per fare qualsiasi cosa, le sue vere mani\nsono diventate molto maldestre. Fa il nido sugli alberi più alti.",
		'de-de': "Der übermäßige Einsatz seines Schweifes hatte\ndie Zurückbildung seiner Hände zur Folge.\nEs lebt in den Kronen hoher Bäume.",
		'pt-br': "Como costuma fazer tudo com sua cauda, tornou-se\ndesajeitado com as mãos. Seus ninhos podem ser\nencontrados no topo das árvores.",
		'ko-kr': "꼬리로 이것저것 하는 사이에\n손이 둔해지고 말았다.\n높은 나무 위에 둥지를 만든다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tail Jab",
			'fr-fr': "Coup d'Queue",
			'es-es': "Puya Cola",
			'it-it': "Stoccacoda",
			'de-de': "Schweifstoß",
			'pt-br': "Sova de Cauda",
			'ko-kr': "꼬리펀치"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
