import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Onix",
		'fr-fr': "Onix",
		'es-es': "Onix",
		'it-it': "Onix",
		'de-de': "Onix",
		'pt-br': "Onix",
		'ko-kr': "롱스톤"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "None",
	category: "Pokemon",

	dexId: [95],
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Land Crush",
			'fr-fr': "Écras'Terre",
			'es-es': "Aterrizaje",
			'it-it': "Schiacciaterra",
			'de-de': "Schollenbrecher",
			'pt-br': "Aperto de Terra",
			'ko-kr': "랜드크래시"
		},

		cost: ["Fighting", "Fighting", "Fighting"],
		damage: 70
	}],

	hp: 110,

	description: {
		'en-us': "As it digs through the ground, it absorbs many\nhard objects. This is what makes its body so solid.",
		'fr-fr': "Il absorbe des éléments solides en creusant le sol,\nce qui le rend plus robuste.",
		'es-es': "Al abrirse paso bajo tierra, va absorbiendo todo lo que\nencuentra. Eso hace que su cuerpo sea así de sólido.",
		'it-it': "Scava nel terreno assorbendo gli oggetti\npiù duri per irrobustire il suo corpo.",
		'de-de': "Wenn es sich durch die Erde gräbt,\nnimmt es viele harte Gegenstände auf,\ndie seinen Körper erhärten.",
		'pt-br': "Ao cavar o chão, absorve vários objetos rígidos,\ntornando o seu corpo extremamente sólido.",
		'ko-kr': "땅속을 파고들면서 여러 가지\n단단한 것들을 집어삼켜서\n튼튼한 몸을 만든다."
	},

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["vol2"]
}

export default card
