import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Probopass",
		fr: "Tarinorme",
		es: "Probopass",
		it: "Probopass",
		de: "Voluminas",
		'pt-br': "Probopass",
		ko: "대코파스"
	},

	illustrator: "MAHOU",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		en: "Nosepass"
	},

	description: {
		en: "Although it can control its units known as Mini-Noses, they sometimes get lost and don't come back.",
		fr: "Il est capable de piloter ses Mini-nez à distance,\nmais il arrive que l'un d'entre eux s'aventure\ntrop loin et se perde pour ne jamais revenir.",
		es: "Manipula unas pequeñas unidades conocidas\ncomo mininarices, aunque estas a veces se\npierden y no saben cómo regresar a Probopass.",
		it: "Controlla delle unità dette Mininasi, ma pare che a\nvolte queste si smarriscano e non riescano più a tornare.",
		de: "Es steuert kleine Einheiten, die man Mininasen nennt.\nLeider verirren sie sich manchmal, und es heißt,\ndass einige von ihnen nie wiederkehren.",
		'pt-br': "Apesar de poder controlar suas unidades conhecidas\ncomo Mininarizes, elas às vezes se perdem\ne não retornam.",
		ko: "꼬마코파스라고 불리는 유닛을\n조종하지만 가끔 미아가 되어\n돌아오지 않는 경우도 있는 듯하다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Triple Nose",
			fr: "Triple Nez",
			es: "Nariz Triple",
			it: "Triplo Naso",
			de: "Dreifachnase",
			'pt-br': "Nariz Triplo",
			ko: "트리플노즈"
		},

		damage: "30+",
		cost: ["Metal", "Metal", "Metal", "Colorless"],

		effect: {
			en: "Flip 3 coins. This attack does 50 more damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 50 puntos de daño más por cada cara.",
			it: "Lancia 3 volte una moneta. Questo attacco infligge 50 danni in più ogni volta che esce testa.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 50 Schadenspunkte mehr pro Kopf zu.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 50 pontos de dano a mais para cada cara.",
			ko: "동전을 3번 던져서 앞면이 나온 수 × 50데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4
}

export default card
