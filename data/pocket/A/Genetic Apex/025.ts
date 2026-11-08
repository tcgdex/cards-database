import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'es-es': "Scyther",
		'it-it': "Scyther",
		'de-de': "Sichlor",
		'pt-br': "Scyther",
		'ko-kr': "스라크"
	},

	illustrator: "Hasuno",
	category: "Pokemon",

	dexId: [123],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Sharp Scythe",
			'fr-fr': "Faucille Acérée",
			'es-es': "Guadaña Afilada",
			'it-it': "Falcetagliente",
			'de-de': "Scharfe Sense",
			'pt-br': "Foice Afiada",
			'ko-kr': "날카로운낫"
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
		'en-us': "It slashes through grass with its sharp scythes, moving too fast for the human eye to track.",
		'fr-fr': "Il fauche les herbes avec ses lames acérées.\nSes mouvements sont si rapides qu'ils sont\nimperceptibles à l'œil nu.",
		'es-es': "Avanza por la hierba con sus afiladas guadañas,\nmás rápido de lo que el ojo humano puede percibir.",
		'it-it': "Si fa strada tra l'erba grazie alle\nlame affilate, muovendosi troppo\nvelocemente per l'occhio umano.",
		'de-de': "Es bahnt sich mit seinen scharfen Sicheln so\nschnell einen Weg durch das Gras, dass es dabei\nfür das menschliche Auge unsichtbar ist.",
		'pt-br': "Corta a grama com suas foices afiadas\ne se move tão rápido que o olho humano\nnão consegue enxergá-lo.",
		'ko-kr': "아주 예리한 낫을 이용해\n풀숲을 베며 나아간다.\n매우 빠른 움직임에 눈이 따라가지 못한다."
	},

	boosters: ["mewtwo"]
}

export default card
