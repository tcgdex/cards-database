import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Tinkatuff",
		fr: "Forgella",
		es: "Tinkatuff",
		it: "Tinkatuff",
		de: "Tafforgita",
		'pt-br': "Tinkatuff",
		ko: "벼리짱"
	},

	illustrator: "miki kudo",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [958],
	hp: 90,
	types: ["Metal"],

	evolveFrom: {
		en: "Tinkatink"
	},

	description: {
		en: "This Pokémon will attack groups of Pawniard and Bisharp, gathering metal from them in order to create a large and sturdy hammer.",
		fr: "Ce Pokémon attaque des cohortes de Scalpion\net de Scalproie pour rassembler le métal nécessaire\nà la confection d'un grand marteau robuste.",
		es: "Asalta el séquito entero de un Bisharp para reunir\nmetal con el que forjar su enorme y robusto martillo.",
		it: "Assalta i branchi capeggiati da Bisharp\nper procurarsi il metallo necessario a\nrealizzare il suo martello grande e resistente.",
		de: "Es überfällt Gruppen von Gladiantri und Caesurio,\num Metall zu sammeln, das es zum Herstellen seines\ngroßen, robusten Hammers benötigt.",
		'pt-br': "Este Pokémon ataca grupos de Pawniard e Bisharp com\no intuito de coletar metal deles e\ncriar um martelo grande e resistente.",
		ko: "크고 튼튼한 해머를 만들기 위해\n절각참 무리를 습격해서\n금속을 모은다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tenacious Hammer",
			fr: "Marteau Persévérant",
			es: "Martillo Tenaz",
			it: "Martello Tenace",
			de: "Hartnäckiger Hammer",
			'pt-br': "Martelo Tenaz",
			ko: "노력해머"
		},

		damage: "30+",
		cost: ["Metal", "Metal"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts de plus.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			ko: "동전을 1번 던져서 앞면이 나오면 30데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card