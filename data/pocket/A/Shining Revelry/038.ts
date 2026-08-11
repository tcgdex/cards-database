import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'es-es': "Machoke",
		'it-it': "Machoke",
		'de-de': "Maschock",
		'pt-br': "Machoke",
		'ko-kr': "근육몬"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [67],
	hp: 100,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Machop"
	},

	description: {
		'en-us': "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.",
		'fr-fr': "Son corps est si puissant qu'il lui faut\nune ceinture pour maîtriser sa force.",
		'es-es': "Su musculoso cuerpo es tan fuerte que usa un\ncinto antifuerza para controlar sus movimientos.",
		'it-it': "Il suo corpo muscoloso è così forte che usa\nuna cintura per contenere la sua potenza.",
		'de-de': "Dieses Pokémon ist superstark. Es kann sich nur\nmit einem kraftregulierenden Gürtel bewegen.",
		'pt-br': "Sua massa muscular é tão poderosa que ele\nprecisa usar um cinto de economia de energia\npara controlar seus movimentos.",
		'ko-kr': "엄청나게 강한 육체를 지녔기 때문에\n파워 세이브 벨트를 차서\n힘을 제어하고 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Pummel",
			'fr-fr': "Martelage",
			'es-es': "Aporrear",
			'it-it': "Legnata",
			'de-de': "Trommler",
			'pt-br': "Esmurrar",
			'ko-kr': "후려갈기기"
		},

		damage: "30+",
		cost: ["Fighting", "Fighting"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 30데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card