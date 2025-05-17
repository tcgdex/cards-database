import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Drilbur",
		fr: "Rototaupe",
		es: "Drilbur",
		it: "Drilbur",
		de: "Rotomurf",
		'pt-br': "Drilbur",
		ko: "두더류"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "It brings its claws together and whirls around at high speed before rushing toward its prey.",
		fr: "Il fonce sur ses proies en joignant ses griffes\net en tourbillonnant sur lui-même.",
		es: "Tras juntar las garras, se abalanza sobre su presa\nhaciendo rotar el cuerpo a gran velocidad.",
		it: "Congiunge le unghie e si avvita su se stesso\na gran velocità per poi lanciarsi sulla preda.",
		de: "Es führt seine beiden Klauen zusammen, dreht sich rapide\num die eigene Achse und stürzt sich auf seine Beute.",
		'pt-br': "Junta suas garras e rodopia em alta velocidade\nantes de correr em direção à sua presa.",
		ko: "양손의 손톱을 서로 겹치고\n몸을 고속으로 회전시킨 뒤\n먹이를 향해 돌진한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch",
			fr: "Griffe",
			es: "Arañazo",
			it: "Graffio",
			de: "Kratzer",
			'pt-br': "Arranhão",
			ko: "할퀴기"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card