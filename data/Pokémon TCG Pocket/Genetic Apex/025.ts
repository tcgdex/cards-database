import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Scyther",
		fr: "Insécateur",
		es: "Scyther",
		it: "Scyther",
		de: "Sichlor",
		'pt-br': "Scyther",
		ko: "스라크"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Sharp Scythe",
			fr: "Faucille Acérée",
			es: "Guadaña Afilada",
			it: "Falcetagliente",
			de: "Scharfe Sense",
			'pt-br': "Foice Afiada",
			ko: "날카로운낫"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It slashes through grass with its sharp scythes, moving too fast for the human eye to track.",
		fr: "Il fauche les herbes avec ses lames acérées.\nSes mouvements sont si rapides qu'ils sont\nimperceptibles à l'œil nu.",
		es: "Avanza por la hierba con sus afiladas guadañas,\nmás rápido de lo que el ojo humano puede percibir.",
		it: "Si fa strada tra l'erba grazie alle\nlame affilate, muovendosi troppo\nvelocemente per l'occhio umano.",
		de: "Es bahnt sich mit seinen scharfen Sicheln so\nschnell einen Weg durch das Gras, dass es dabei\nfür das menschliche Auge unsichtbar ist.",
		'pt-br': "Corta a grama com suas foices afiadas\ne se move tão rápido que o olho humano\nnão consegue enxergá-lo.",
		ko: "아주 예리한 낫을 이용해\n풀숲을 베며 나아간다.\n매우 빠른 움직임에 눈이 따라가지 못한다."
	},

	boosters: ["mewtwo"]
}

export default card
