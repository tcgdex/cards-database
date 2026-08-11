import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Exeggutor ex",
		'fr-fr': "Noadkoko-ex",
		'es-es': "Exeggutor ex",
		'it-it': "Exeggutor-ex",
		'de-de': "Kokowei-ex",
		'pt-br': "Exeggutor ex",
		'ko-kr': "나시 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [103],
	hp: 160,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Exeggcute"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Tropical Swing",
			'fr-fr': "Coup Tropical",
			'es-es': "Golpe Tropical",
			'it-it': "Tropicolpo",
			'de-de': "Tropenschwung",
			'pt-br': "Balanço Tropical",
			'ko-kr': "트로피컬스윙"
		},

		damage: "40+",
		cost: ["Grass"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts de plus.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 40데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["lunala"]
}

export default card
