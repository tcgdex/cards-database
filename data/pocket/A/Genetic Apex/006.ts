import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Metapod",
		'fr-fr': "Chrysacier",
		'es-es': "Metapod",
		'it-it': "Metapod",
		'de-de': "Safcon",
		'pt-br': "Metapod",
		'ko-kr': "단데기"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",

	dexId: [11],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Caterpie"
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bug Bite",
			'fr-fr': "Piqûre",
			'es-es': "Picadura",
			'it-it': "Coleomorso",
			'de-de': "Käferbiss",
			'pt-br': "Picada",
			'ko-kr': "벌레먹기"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		'en-us': "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
		'fr-fr': "En attendant sa prochaine évolution, il ne peut que durcir\nsa carapace et rester immobile pour éviter de se faire attaquer.",
		'es-es': "Como en este estado solo puede\nendurecer su coraza, permanece\ninmóvil a la espera de evolucionar.",
		'it-it': "In attesa di evolversi, l'unica cosa che può\nfare è indurire la sua corazza, quindi rimane\nimmobile per evitare di essere attaccato.",
		'de-de': "In diesem Zustand wartet es auf die Entwicklung.\nEs kann nur seinen Panzer erhärten, daher bewegt\nes sich nicht, um nicht angegriffen zu werden.",
		'pt-br': "Metapod está aguardando o momento certo para\nevoluir. Neste estágio, só consegue endurecer,\nentão permanece imóvel para evitar ataques.",
		'ko-kr': "진화를 기다리고 있는 상태다.\n단단해지는 것밖에 할 수 없어서\n공격받지 않도록 꿈쩍 않고 있다."
	},

	boosters: ["pikachu"]
}

export default card
