import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Swoobat",
		'fr-fr': "Rhinolove",
		'es-es': "Swoobat",
		'it-it': "Swoobat",
		'de-de': "Fletiamo",
		'pt-br': "Swoobat",
		'ko-kr': "맘박쥐"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",

	dexId: [528],
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Woobat"
	},

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Heart Stamp",
			'fr-fr': "Crève-Cœur",
			'es-es': "Arrumaco",
			'it-it': "Cuorestampo",
			'de-de': "Herzstempel",
			'pt-br': "Estampa de Coração",
			'ko-kr': "하트스탬프"
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
		'en-us': "Emitting powerful sound waves tires it out. Afterward, it won't be able to fly for a little while.",
		'fr-fr': "Émettre des ondes sonores ultra-puissantes le fatigue tellement\nqu'il n'a plus de forces pour voler.",
		'es-es': "Tras emitir sus potentísimas ondas,\nqueda tan exhausto que es incapaz\nde volar durante un tiempo.",
		'it-it': "Dopo aver emesso delle potentissime onde sonore\nè così stanco da non poter volare per un po'.",
		'de-de': "Hat es besonders starke Ultraschallwellen\nausgestoßen, wird es so müde, dass es für\neine Weile nicht fliegen kann.",
		'pt-br': "Emitir ondas sonoras poderosas faz com\nque fique cansado. Depois, não consegue\nvoar por um tempo.",
		'ko-kr': "아주 강력한 음파를\n내보낸 후에는 지쳐서\n당분간 날 수 없게 된다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
