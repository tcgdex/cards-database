import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Aipom",
		fr: "Capumain",
		es: "Aipom",
		it: "Aipom",
		de: "Griffel",
		'pt-br': "Aipom",
		ko: "에이팜"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "As it did more and more with its tail, its hands became clumsy. It makes its nest high in the treetops.",
		fr: "À force d'utiliser sa queue à tort et à travers,\nelle est devenue plus habile que ses mains.\nIl l'utilise pour faire son nid en haut des arbres.",
		es: "De tanto utilizar la cola, esta se ha vuelto más hábil que sus\ndedos. Construye sus nidos en las copas de los árboles.",
		it: "Poiché utilizza la coda per fare qualsiasi cosa, le sue vere mani\nsono diventate molto maldestre. Fa il nido sugli alberi più alti.",
		de: "Der übermäßige Einsatz seines Schweifes hatte\ndie Zurückbildung seiner Hände zur Folge.\nEs lebt in den Kronen hoher Bäume.",
		'pt-br': "Como costuma fazer tudo com sua cauda, tornou-se\ndesajeitado com as mãos. Seus ninhos podem ser\nencontrados no topo das árvores.",
		ko: "꼬리로 이것저것 하는 사이에\n손이 둔해지고 말았다.\n높은 나무 위에 둥지를 만든다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tail Jab",
			fr: "Coup d'Queue",
			es: "Puya Cola",
			it: "Stoccacoda",
			de: "Schweifstoß",
			'pt-br': "Sova de Cauda",
			ko: "꼬리펀치"
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
