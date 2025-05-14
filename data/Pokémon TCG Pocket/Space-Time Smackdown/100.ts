import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Poochyena",
		fr: "Medhyèna",
		es: "Poochyena",
		it: "Poochyena",
		de: "Fiffyen",
		'pt-br': "Poochyena",
		ko: "포챠나"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "A Pokémon with a persistent nature, it chases its chosen prey until the prey becomes exhausted.",
		fr: "Un Pokémon très obstiné qui poursuit\nsa proie jusqu'à ce qu'elle soit épuisée.",
		es: "Es muy persistente. Si se fija en una presa,\nno la dejará hasta que caiga agotada.",
		it: "Pokémon di natura ostinata. Insegue la\npreda prescelta finché questa non è esausta.",
		de: "Ein beharrliches Pokémon, das seine Beute jagt,\nbis diese erschöpft ist.",
		'pt-br': "Pokémon de natureza persistente,\ncaça sua presa escolhida até ela ficar exausta.",
		ko: "집요한 성격의 포켓몬이다.\n점찍은 먹이가 기진맥진\n지칠 때까지 뒤쫓아간다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			it: "Morso",
			de: "Biss",
			'pt-br': "Mordida",
			ko: "물기"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card
