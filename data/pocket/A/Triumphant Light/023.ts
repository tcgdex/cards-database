import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Origin Forme Palkia",
		'fr-fr': "PalkiaForme Originelle",
		'es-es': "PalkiaOrigen",
		'it-it': "PalkiaForma Originale",
		'de-de': "Ur-Palkia",
		'pt-br': "PalkiaForma Origem",
		'ko-kr': "오리진펄기아"
	},

	illustrator: "toriyufu",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [484],
	hp: 120,
	types: ["Water"],

	description: {
		'en-us': "It soars across the sky in a form that greatly resembles the creator of all things. Perhaps this imitation of appearance is Palkia's strategy for gaining Arceus's powers.",
		'fr-fr': "Cette forme qui sillonne les cieux me fait penser\nau créateur de toutes choses. Je pense qu'épouser cette\napparence prodigue à Palkia les pouvoirs du créateur.",
		'es-es': "Esta forma que surca el cielo me hace pensar\nen el creador de todo lo existente. Quizá adopte\ndicha forma para hacerse con su poder.",
		'it-it': "Vederlo solcare i cieli mi riporta alla mente l'entità\ncreatrice. Che, imitandone la forma, stia forse\ncercando di impadronirsi del suo potere?",
		'de-de': "Dem Schöpfer aller Dinge gleich gleitet es über das\nHimmelszelt. Womöglich gebärdet es sich auf diese Weise,\num sich die Macht der Schöpfergottheit zu eigen zu machen.",
		'pt-br': "Dispara pelos céus com uma forma que se assemelha\nmuito ao criador de todas as coisas. Pode ser que essa\nimitação de aparência de Palkia seja uma estratégia\npara conquistar os poderes de Arceus.",
		'ko-kr': "하늘을 나는 모습은 만물의 창조주를 연상케한다.\n창조주의 모습을 흉내 냄으로써\n그 힘을 자신의 것으로 만들었다고 추측된다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Zone Smash",
			'fr-fr': "Zone d'Impact",
			'es-es': "Zona Demoledora",
			'it-it': "Urto Spaziale",
			'de-de': "Zonenbruch",
			'pt-br': "Zona de Colisão",
			'ko-kr': "존브레이크"
		},

		damage: "60+",
		cost: ["Water", "Water", "Water"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 60 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts de plus.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 60데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card
