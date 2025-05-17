import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Drowzee",
		fr: "Soporifik",
		es: "Drowzee",
		it: "Drowzee",
		de: "Traumato",
		'pt-br': "Drowzee",
		ko: "슬리프"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Mumble",
			fr: "Murmure",
			es: "Farfullar",
			it: "Borbottio",
			de: "Grummeln",
			'pt-br': "Resmungo",
			ko: "중얼거리기"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "It remembers every dream it eats. It rarely eats the dreams of adults because children's are much tastier.",
		fr: "Ce Pokémon se souvient de tous les rêves\nqu'il a avalés. Il mange rarement les songes\nd'adultes, car ceux des enfants ont meilleur goût.",
		es: "Recuerda todos los sueños que engulle.\nRaramente come sueños de adultos\nporque los de los niños están más ricos.",
		it: "Ricorda ogni singolo sogno che mangia.\nMangia raramente i sogni degli adulti,\nperché quelli dei bambini sono più buoni.",
		de: "Es kann sich an jeden gefressenen Traum erinnern.\nDie Träume von Kindern schmecken ihm besser,\nweshalb es die von Erwachsenen nur selten frisst.",
		'pt-br': "Ele lembra cada sonho que come. Raramente\ncome sonhos de adultos, pois os das crianças\nsão mais saborosos.",
		ko: "먹어 치운 꿈은 모두 기억하고 있다.\n아이들의 꿈이 맛있기 때문에\n어른들의 꿈은 거의 먹지 않는다."
	},

	boosters: ["pikachu"]
}

export default card
