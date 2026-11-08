import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Floatzel",
		'fr-fr': "Mustéflott",
		'es-es': "Floatzel",
		'it-it': "Floatzel",
		'de-de': "Bojelin",
		'pt-br': "Floatzel",
		'ko-kr': "플로젤"
	},

	illustrator: "Shin Nagasawa",
	rarity: "None",
	category: "Pokemon",

	dexId: [419],
	hp: 100,
	types: ["Water"],

	description: {
		'en-us': "With its flotation sac inflated, it can carry people\non its back. It deflates the sac before it dives.",
		'fr-fr': "Il gonfle sa bouée pour permettre aux gens de\nmonter sur son dos et il la dégonfle pour plonger.",
		'es-es': "Con la vejiga natatoria inflada, puede llevar a personas\nsobre su espalda. Antes de bucear, la desinfla.",
		'it-it': "Col galleggiante gonfio, può trasportare delle\npersone sul dorso. Per immergersi lo sgonfia.",
		'de-de': "Mit gefüllter Schwimmblase kann es Menschen\nauf seinem Rücken tragen. Lässt es Luft aus ihr\nheraus, taucht es unter.",
		'pt-br': "Com sua bolsa de flutuação inflada, pode transportar\npessoas nas costas. Esvazia a bolsa antes de mergulhar.",
		'ko-kr': "부낭을 부풀리면 사람을\n등에 태울 수 있다.\n부낭을 오그라들게 하여 잠수한다."
	},

	stage: "Stage1",

	evolveFrom: {
		'en-us': "Buizel"
	},

	attacks: [{
		name: {
			'en-us': "Attack the Wound",
			'fr-fr': "Défi de la Plaie",
			'es-es': "Ataque a la Herida",
			'it-it': "Attacco Spietato",
			'de-de': "Wundschmerz",
			'pt-br': "Atacar a Ferida",
			'ko-kr': "상처때리기"
		},

		cost: ["Water"],
		damage: "10+",

		effect: {
			'en-us': "If your opponent's Active Pokémon has damage on it, this attack does 60 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a subi des dégâts, cette attaque inflige 60 dégâts de plus.",
			'es-es': "Si el Pokémon Activo de tu rival ya tiene daño, este ataque hace 60 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario è danneggiato, questo attacco infligge 60 danni in più.",
			'de-de': "Wenn dem Aktiven Pokémon deines Gegners bereits Schaden zugefügt wurde, fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'pt-br': "Se o Pokémon Ativo do seu oponente estiver danificado, este ataque causará 60 pontos de dano a mais.",
			'ko-kr': "상대의 배틀 포켓몬이 데미지를 받고 있다면 60데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol6"]
}

export default card
