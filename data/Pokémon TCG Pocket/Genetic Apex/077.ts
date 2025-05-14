import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		es: "Magikarp",
		it: "Magikarp",
		de: "Karpador",
		'pt-br': "Magikarp",
		ko: "잉어킹"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Splash",
			fr: "Trempette",
			es: "Salpicadura",
			it: "Splash",
			de: "Platscher",
			'pt-br': "Borrifada",
			ko: "튀어오르기"
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "An underpowered, pathetic Pokémon. It may jump high on rare occasions but never more than seven feet.",
		fr: "Un Pokémon tout à fait pathétique. En de très\nrares occasions, il est capable de sauter haut,\nmais jamais à plus de deux mètres.",
		es: "Un Pokémon desvalido y patético. A veces es\ncapaz de saltar alto, pero rara vez más de 2 m.",
		it: "Un Pokémon debole e patetico. Nelle rare\noccasioni in cui spicca alti salti, non riesce\ncomunque a raggiungere i due metri.",
		de: "Ein schwaches und jämmerliches Pokémon.\nManchmal gelingen ihm hohe Sprünge,\naber über 2 m kommt es selten hinaus.",
		'pt-br': "Este Pokémon é patético e nem um pouco\npoderoso. Às vezes, até pula bem alto,\nmas nunca mais de dois metros.",
		ko: "힘없는 한심한 포켓몬이다.\n가끔 높이 뛰어오르지만\n2m를 겨우 넘기는 게 고작이다."
	}
}

export default card
