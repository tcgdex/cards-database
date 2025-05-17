import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Origin Forme Palkia",
		fr: "PalkiaForme Originelle",
		es: "PalkiaOrigen",
		it: "PalkiaForma Originale",
		de: "Ur-Palkia",
		'pt-br': "PalkiaForma Origem",
		ko: "오리진펄기아"
	},

	illustrator: "toriyufu",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		en: "It soars across the sky in a form that greatly resembles the creator of all things. Perhaps this imitation of appearance is Palkia's strategy for gaining Arceus's powers.",
		fr: "Cette forme qui sillonne les cieux me fait penser\nau créateur de toutes choses. Je pense qu'épouser cette\napparence prodigue à Palkia les pouvoirs du créateur.",
		es: "Esta forma que surca el cielo me hace pensar\nen el creador de todo lo existente. Quizá adopte\ndicha forma para hacerse con su poder.",
		it: "Vederlo solcare i cieli mi riporta alla mente l'entità\ncreatrice. Che, imitandone la forma, stia forse\ncercando di impadronirsi del suo potere?",
		de: "Dem Schöpfer aller Dinge gleich gleitet es über das\nHimmelszelt. Womöglich gebärdet es sich auf diese Weise,\num sich die Macht der Schöpfergottheit zu eigen zu machen.",
		'pt-br': "Dispara pelos céus com uma forma que se assemelha\nmuito ao criador de todas as coisas. Pode ser que essa\nimitação de aparência de Palkia seja uma estratégia\npara conquistar os poderes de Arceus.",
		ko: "하늘을 나는 모습은 만물의 창조주를 연상케한다.\n창조주의 모습을 흉내 냄으로써\n그 힘을 자신의 것으로 만들었다고 추측된다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Zone Smash",
			fr: "Zone d'Impact",
			es: "Zona Demoledora",
			it: "Urto Spaziale",
			de: "Zonenbruch",
			'pt-br': "Zona de Colisão",
			ko: "존브레이크"
		},

		damage: "60+",
		cost: ["Water", "Water", "Water"],

		effect: {
			en: "Flip a coin. If heads, this attack does 60 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts de plus.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 60 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 60 danni in più.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 60 Schadenspunkte mehr zu.",
			'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 60 pontos de dano a mais.",
			ko: "동전을 1번 던져서 앞면이 나오면 60데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card
