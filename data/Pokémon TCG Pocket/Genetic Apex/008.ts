import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Weedle",
		fr: "Aspicot",
		es: "Weedle",
		it: "Weedle",
		de: "Hornliu",
		'pt-br': "Weedle",
		ko: "뿔충이"
	},

	illustrator: "Hajime Kusajima",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Sting",
			fr: "Dard",
			es: "Aguijonazo",
			it: "Puntura",
			de: "Einstich",
			'pt-br': "Ferroada",
			ko: "따끔따끔찌르기"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.",
		fr: "On trouve souvent ce Pokémon dans les forêts\net les hautes herbes. L'aiguillon de 5 cm\nsur sa tête contient un venin très toxique.",
		es: "Suele habitar bosques y praderas.\nTiene un afilado y venenoso aguijón\nde unos 5 cm encima de la cabeza.",
		it: "Vive soprattutto nei boschi e nei prati. Sul capo\nha un affilato e velenoso pungiglione lungo 5 cm.",
		de: "Es lebt bevorzugt in Wäldern und in hohem Gras.\nAuf dem Kopf trägt es einen circa 5 cm langen,\nspitzen, giftigen Stachel.",
		'pt-br': "Encontrado frequentemente em florestas e\npradarias. Possui uma farpa afiada e tóxica\nde cerca de 5 cm em cima da cabeça.",
		ko: "숲이나 풀밭에 많이 서식한다.\n머리끝에 5cm 정도의\n작고 날카로운 독침을 지니고 있다."
	},

	boosters: ["mewtwo"]
}

export default card
