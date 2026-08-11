import { Card } from "models/database/card"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyèna",
		'es-es': "Poochyena",
		'it-it': "Poochyena",
		'de-de': "Fiffyen",
		'pt-br': "Poochyena",
		'ko-kr': "포챠나"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [261],
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "A Pokémon with a persistent nature, it chases its chosen prey until the prey becomes exhausted.",
		'fr-fr': "Un Pokémon très obstiné qui poursuit\nsa proie jusqu'à ce qu'elle soit épuisée.",
		'es-es': "Es muy persistente. Si se fija en una presa,\nno la dejará hasta que caiga agotada.",
		'it-it': "Pokémon di natura ostinata. Insegue la\npreda prescelta finché questa non è esausta.",
		'de-de': "Ein beharrliches Pokémon, das seine Beute jagt,\nbis diese erschöpft ist.",
		'pt-br': "Pokémon de natureza persistente,\ncaça sua presa escolhida até ela ficar exausta.",
		'ko-kr': "집요한 성격의 포켓몬이다.\n점찍은 먹이가 기진맥진\n지칠 때까지 뒤쫓아간다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'de-de': "Biss",
			'pt-br': "Mordida",
			'ko-kr': "물기"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
