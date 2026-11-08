import { Card } from "models/database/card"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tinkatuff",
		'fr-fr': "Forgella",
		'es-es': "Tinkatuff",
		'it-it': "Tinkatuff",
		'de-de': "Tafforgita",
		'pt-br': "Tinkatuff",
		'ko-kr': "벼리짱"
	},

	illustrator: "miki kudo",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [958],
	hp: 90,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Tinkatink"
	},

	description: {
		'en-us': "This Pokémon will attack groups of Pawniard and Bisharp, gathering metal from them in order to create a large and sturdy hammer.",
		'fr-fr': "Ce Pokémon attaque des cohortes de Scalpion\net de Scalproie pour rassembler le métal nécessaire\nà la confection d'un grand marteau robuste.",
		'es-es': "Asalta el séquito entero de un Bisharp para reunir\nmetal con el que forjar su enorme y robusto martillo.",
		'it-it': "Assalta i branchi capeggiati da Bisharp\nper procurarsi il metallo necessario a\nrealizzare il suo martello grande e resistente.",
		'de-de': "Es überfällt Gruppen von Gladiantri und Caesurio,\num Metall zu sammeln, das es zum Herstellen seines\ngroßen, robusten Hammers benötigt.",
		'pt-br': "Este Pokémon ataca grupos de Pawniard e Bisharp com\no intuito de coletar metal deles e\ncriar um martelo grande e resistente.",
		'ko-kr': "크고 튼튼한 해머를 만들기 위해\n절각참 무리를 습격해서\n금속을 모은다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Tenacious Hammer",
			'fr-fr': "Marteau Persévérant",
			'es-es': "Martillo Tenaz",
			'it-it': "Martello Tenace",
			'de-de': "Hartnäckiger Hammer",
			'pt-br': "Martelo Tenaz",
			'ko-kr': "노력해머"
		},

		damage: "30+",
		cost: ["Metal", "Metal"],

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
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card