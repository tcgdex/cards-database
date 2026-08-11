import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
		'es-es': "Drilbur",
		'it-it': "Drilbur",
		'de-de': "Rotomurf",
		'pt-br': "Drilbur",
		'ko-kr': "두더류"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [529],
	hp: 60,
	types: ["Fighting"],

	description: {
		'en-us': "It brings its claws together and whirls around at high speed before rushing toward its prey.",
		'fr-fr': "Il fonce sur ses proies en joignant ses griffes\net en tourbillonnant sur lui-même.",
		'es-es': "Tras juntar las garras, se abalanza sobre su presa\nhaciendo rotar el cuerpo a gran velocidad.",
		'it-it': "Congiunge le unghie e si avvita su se stesso\na gran velocità per poi lanciarsi sulla preda.",
		'de-de': "Es führt seine beiden Klauen zusammen, dreht sich rapide\num die eigene Achse und stürzt sich auf seine Beute.",
		'pt-br': "Junta suas garras e rodopia em alta velocidade\nantes de correr em direção à sua presa.",
		'ko-kr': "양손의 손톱을 서로 겹치고\n몸을 고속으로 회전시킨 뒤\n먹이를 향해 돌진한다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'de-de': "Kratzer",
			'pt-br': "Arranhão",
			'ko-kr': "할퀴기"
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