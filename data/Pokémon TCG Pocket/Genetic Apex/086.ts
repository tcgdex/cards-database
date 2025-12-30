import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Swanna",
		fr: "Lakmécygne",
		es: "Swanna",
		it: "Swanna",
		de: "Swaroness",
		'pt-br': "Swanna",
		ko: "스완나"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",

	evolveFrom: {
		en: "Ducklett",
		fr: "Couaneton",
		es: "Ducklett",
		it: "Ducklett",
		pt: "Ducklett",
		de: "Piccolente"
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes",
			es: "Ataque Ala",
			it: "Attacco d'Ala",
			de: "Flügelschlag",
			'pt-br': "Ataque de Asa",
			ko: "날개치기"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "Despite their elegant appearance, they can flap their wings strongly and fly for thousands of miles.",
		fr: "Un Pokémon gracieux, mais aussi robuste. Il peut voler\ndes milliers de kilomètres grâce à ses ailes puissantes.",
		es: "Aunque no lo parezca por su grácil\nelegancia, puede batir con fuerza las\nalas y volar durante miles de kilómetros.",
		it: "Non è solo elegante. Con il poderoso battito d'ali riesce\na volare per migliaia di chilometri senza fermarsi.",
		de: "Sie wirken zerbrechlich, aber ihre starken Schwingen\ntragen sie in einem Stück bis zu 1000 km weit.",
		'pt-br': "Apesar de sua aparência elegante, podem bater\nas asas com vigor e voar por milhares de quilômetros.",
		ko: "우아한 외모와 다르게\n날개로 힘차게 날개 치며\n수천 km를 계속 날 수 있다."
	},

	boosters: ["charizard"]
}

export default card
