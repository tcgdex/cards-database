import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Lapras",
		fr: "Lokhlass",
		es: "Lapras",
		it: "Lapras",
		de: "Lapras",
		'pt-br': "Lapras",
		ko: "라프라스"
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
			es: "Hidrobomba",
			it: "Idropompa",
			de: "Hydropumpe",
			'pt-br': "Jato d'Água",
			ko: "하이드로펌프"
		},

		effect: {
			en: "If this Pokémon has at least 3 extra {W} Energy attached, this attack does 70 more damage.",
			fr: "Si ce Pokémon a au moins 3 Énergies {W} de plus, cette attaque inflige 70 dégâts supplémentaires.",
			es: "Si este Pokémon tiene por lo menos 3 Energías {W} adicionales unidas a él, este ataque hace 70 puntos de daño más.",
			it: "Se questo Pokémon ha almeno 3 Energie {W} extra assegnate, questo attacco infligge 70 danni in più.",
			de: "Wenn an dieses Pokémon mindestens 3 extra {W} Energien angelegt sind, fügt diese Attacke 70 Schadenspunkte mehr zu.",
			'pt-br': "Se este Pokémon tiver pelo menos 3 Energias {W} extras ligada a ele, este ataque causará 70 pontos de dano a mais.",
			ko: "W에너지 3개가 추가로 붙어 있다면 70데미지를 추가한다."
		},

		damage: "20+"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Star",

	description: {
		en: "A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.",
		fr: "C'est un Pokémon doux et intelligent.\nIl vogue sur la mer en émettant un chant\nmagnifique.",
		es: "Este Pokémon posee una notable inteligencia\ny un corazón de oro. Entona un canto\nmelodioso mientras surca el mar.",
		it: "È un Pokémon intelligente e dall'animo\ngentile. Solca i mari facendo riecheggiare\nil suo canto dolce e melodioso.",
		de: "Ein intelligentes und herzensgutes Pokémon.\nWährend es auf dem Meer schwimmt, lässt es\nseinen herrlichen Gesang erklingen.",
		'pt-br': "Este Pokémon esperto e bondoso flutua\nna superfície do oceano, enquanto sua\nlinda canção ecoa ao redor.",
		ko: "영리하고 마음 착한 포켓몬.\n아름다운 소리로 노래 부르며\n바다 위를 헤엄친다."
	}
}

export default card
