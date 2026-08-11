import { Card } from "models/database/card"
import Set from "../Genetic Apex"
const card: Card = {
	set: Set,

	name: {
		'en-us': "Lapras",
		'fr-fr': "Lokhlass",
		'es-es': "Lapras",
		'it-it': "Lapras",
		'de-de': "Lapras",
		'ko-kr': "라프라스",
		'pt-br': "Lapras"
	},

	illustrator: "Sekio",
	category: "Pokemon",

	dexId: [131],
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],
		name: {
			'en-us': "Hydro Pump",
			'fr-fr': "Hydrocanon",
			'es-es': "Hidrobomba",
			'it-it': "Idropompa",
			'de-de': "Hydropumpe",
			'ko-kr': "하이드로펌프",
			'pt-br': "Jato d'Água"
		},
		effect: {
			'en-us': "If this Pokémon has at least 3 extra {W} Energy attached, this attack does 70 more damage.",
			'fr-fr': "Si ce Pokémon a au moins 3 Énergies {W} de plus, cette attaque inflige 70 dégâts supplémentaires.",
			'es-es': "Si este Pokémon tiene por lo menos 3 Energías {W} adicionales unidas a él, este ataque hace 70 puntos de daño más.",
			'it-it': "Se questo Pokémon ha almeno 3 Energie {W} extra assegnate, questo attacco infligge 70 danni in più.",
			'de-de': "Wenn an dieses Pokémon mindestens 3 extra {W}-Energien angelegt sind, fügt diese Attacke 70 Schadenspunkte mehr zu.",
			'ko-kr': "{W}에너지 3개가 추가로 붙어 있다면 70데미지를 추가한다.",
			'pt-br': "Se este Pokémon tiver pelo menos 3 Energia {W} extra ligada a ele, este ataque causará 70 pontos de dano a mais."
		},
		damage: "20+"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		'en-us': "A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.",
		'fr-fr': "C'est un Pokémon doux et intelligent.\nIl vogue sur la mer en émettant un chant\nmagnifique.",
		'es-es': "Este Pokémon posee una notable inteligencia\ny un corazón de oro. Entona un canto\nmelodioso mientras surca el mar.",
		'it-it': "È un Pokémon intelligente e dall'animo\ngentile. Solca i mari facendo riecheggiare\nil suo canto dolce e melodioso.",
		'de-de': "Ein intelligentes und herzensgutes Pokémon.\nWährend es auf dem Meer schwimmt, lässt es\nseinen herrlichen Gesang erklingen.",
		'pt-br': "Este Pokémon esperto e bondoso flutua\nna superfície do oceano, enquanto sua\nlinda canção ecoa ao redor.",
		'ko-kr': "영리하고 마음 착한 포켓몬.\n아름다운 소리로 노래 부르며\n바다 위를 헤엄친다."
	},

	boosters: ["charizard"]
}
export default card