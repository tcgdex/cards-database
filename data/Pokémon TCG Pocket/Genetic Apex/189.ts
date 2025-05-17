import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Rattata",
		fr: "Rattata",
		es: "Rattata",
		it: "Rattata",
		de: "Rattfratz",
		'pt-br': "Rattata",
		ko: "꼬렛"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gnaw",
			fr: "Ronge",
			es: "Roer",
			it: "Rosicchiamento",
			de: "Nagen",
			'pt-br': "Roída",
			ko: "갉기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Its incisors grow continuously throughout its life. If its incisors get too long, this Pokémon becomes unable to eat, and it starves to death.",
		fr: "Ses incisives poussent tout au long de sa vie.\nSi elles dépassent une certaine longueur,\nil ne peut plus s'alimenter et meurt de faim.",
		es: "Sus incisivos crecen durante toda su vida.\nSi aumentan demasiado de tamaño, no\npuede alimentarse y muere de inanición.",
		it: "I suoi incisivi continuano a crescere per\ntutta la vita. Se si allungano troppo, non\nriesce più a nutrirsi e muore di fame.",
		de: "Seine Nagezähne wachsen sein ganzes Leben\nüber. Werden sie allzu lang, kann es damit nicht\nmehr fressen und verhungert.",
		'pt-br': "Seus incisivos crescem continuamente durante toda\na sua vida, mas se ficarem longos demais, este Pokémon\nnão conseguirá comer e morrerá de fome.",
		ko: "평생 앞니가 계속 자란다.\n너무 많이 자라면 먹이를\n먹을 수 없어 굶어 죽는다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
