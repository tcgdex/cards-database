import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ambipom",
		'fr-fr': "Capidextre",
		'es-es': "Ambipom",
		'it-it': "Ambipom",
		'de-de': "Ambidiffel",
		'pt-br': "Ambipom",
		'ko-kr': "겟핸보숭"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [424],
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Aipom"
	},

	description: {
		'en-us': "It uses its tails for everything. If it wraps both of its tails around you and gives you a squeeze, that's proof it really likes you.",
		'fr-fr': "Il utilise toujours ses deux queues pour faire\nla moindre tâche. Il s'en sert aussi pour enlacer\nles gens qu'il affectionne tout particulièrement.",
		'es-es': "Utiliza las dos colas para todo. Cuando abraza\na alguien con ellas significa que esa persona\nse ha ganado por completo su confianza.",
		'it-it': "Usa le code per fare tutto. Se abbraccia\nqualcuno con entrambe le code, significa che\nprova un grande affetto per questa persona.",
		'de-de': "Es benutzt seine zwei Schweife für alles, was es tut.\nWenn es jemanden mit ihnen umarmt, ist das ein\nBeweis seiner Zuneigung.",
		'pt-br': "Usa suas caudas para tudo. Se enroscar você com suas\nduas caudas e der um apertão, é sinal de que gosta muito\nde você.",
		'ko-kr': "무엇을 하더라도 꼬리를 사용한다.\n2개의 꼬리로 껴안는다면\n정말로 친밀해졌다는 증거다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Double Hit",
			'fr-fr': "Coup Double",
			'es-es': "Doble Golpe",
			'it-it': "Doppiosmash",
			'de-de': "Doppelschlag",
			'pt-br': "Golpe Duplo",
			'ko-kr': "더블어택"
		},

		damage: "40×",
		cost: ["Colorless"],

		effect: {
			'en-us': "Flip 2 coins. This attack does 40 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			'it-it': "Lancia 2 volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			'ko-kr': "동전을 2번 던져서 앞면이 나온 수 × 40데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
