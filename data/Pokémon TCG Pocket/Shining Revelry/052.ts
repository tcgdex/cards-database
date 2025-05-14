import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Tinkatink",
		fr: "Forgerette",
		es: "Tinkatink",
		it: "Tinkatink",
		de: "Forgita",
		'pt-br': "Tinkatink",
		ko: "어리짱"
	},

	illustrator: "miki kudo",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		en: "It swings its handmade hammer around to protect itself, but the hammer is often stolen by Pokémon that eat metal.",
		fr: "Il se défend en brandissant un marteau qu'il a créé\nlui-même, mais les Pokémon qui se nourrissent\nde métaux ont tendance à le lui voler.",
		es: "Agita su martillo forjado a mano para ahuyentar\na posibles amenazas, pero los Pokémon que se\nalimentan a base de metal suelen robárselo.",
		it: "Si difende adoperando un martello che ha\nforgiato personalmente, anche se spesso\ni Pokémon ghiotti di metallo glielo rubano.",
		de: "Es schwingt seinen handgeschmiedeten Hammer,\num sich zu schützen. Dieser wird ihm allerdings oft\nvon Pokémon gestohlen, die Metall fressen.",
		'pt-br': "Balança seu martelo feito à mão para se proteger,\nmas o martelo é roubado com frequência\npor Pokémon que comem metal.",
		ko: "손수 만든 해머를 휘둘러\n몸을 지키려 하나\n금속을 먹는 포켓몬에게 자주 빼앗기고 만다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Corkscrew Punch",
			fr: "Poing Tire-Bouchon",
			es: "Puño Tirabuzón",
			it: "Pugno Rotante",
			de: "Korkenzieherhieb",
			'pt-br': "Soco Saca-rolha",
			ko: "쥐어박기"
		},

		damage: 20,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card