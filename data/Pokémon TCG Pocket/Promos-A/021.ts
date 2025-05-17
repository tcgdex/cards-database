import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Onix",
		fr: "Onix",
		es: "Onix",
		it: "Onix",
		de: "Onix",
		'pt-br': "Onix",
		ko: "롱스톤"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "None",
	category: "Pokemon",
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Land Crush",
			fr: "Écras'Terre",
			es: "Aterrizaje",
			it: "Schiacciaterra",
			de: "Schollenbrecher",
			'pt-br': "Aperto de Terra",
			ko: "랜드크래시"
		},

		cost: ["Fighting", "Fighting", "Fighting"],
		damage: 70
	}],

	hp: 110,

	description: {
		en: "As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.",
		fr: "Il absorbe des éléments solides en creusant le sol,\nce qui le rend plus robuste.",
		es: "Al abrirse paso bajo tierra, va absorbiendo todo lo que\nencuentra. Eso hace que su cuerpo sea así de sólido.",
		it: "Scava nel terreno assorbendo gli oggetti\npiù duri per irrobustire il suo corpo.",
		de: "Wenn es sich durch die Erde gräbt,\nnimmt es viele harte Gegenstände auf,\ndie seinen Körper erhärten.",
		'pt-br': "Ao cavar o chão, absorve vários objetos rígidos,\ntornando o seu corpo extremamente sólido.",
		ko: "땅속을 파고들면서 여러 가지\n단단한 것들을 집어삼켜서\n튼튼한 몸을 만든다."
	},

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4
}

export default card
