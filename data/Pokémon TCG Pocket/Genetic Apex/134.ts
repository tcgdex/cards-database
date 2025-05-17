import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Swoobat",
		fr: "Rhinolove",
		es: "Swoobat",
		it: "Swoobat",
		de: "Fletiamo",
		'pt-br': "Swoobat",
		ko: "맘박쥐"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",
	evolveFrom: {
		en: "Woobat"
	},


	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Heart Stamp",
			fr: "Crève-Cœur",
			es: "Arrumaco",
			it: "Cuorestampo",
			de: "Herzstempel",
			'pt-br': "Estampa de Coração",
			ko: "하트스탬프"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Emitting powerful sound waves tires it out. Afterward, it won't be able to fly for a little while.",
		fr: "Émettre des ondes sonores ultra-puissantes le fatigue tellement\nqu'il n'a plus de forces pour voler.",
		es: "Tras emitir sus potentísimas ondas,\nqueda tan exhausto que es incapaz\nde volar durante un tiempo.",
		it: "Dopo aver emesso delle potentissime onde sonore\nè così stanco da non poter volare per un po'.",
		de: "Hat es besonders starke Ultraschallwellen\nausgestoßen, wird es so müde, dass es für\neine Weile nicht fliegen kann.",
		'pt-br': "Emitir ondas sonoras poderosas faz com\nque fique cansado. Depois, não consegue\nvoar por um tempo.",
		ko: "아주 강력한 음파를\n내보낸 후에는 지쳐서\n당분간 날 수 없게 된다."
	}
}

export default card
