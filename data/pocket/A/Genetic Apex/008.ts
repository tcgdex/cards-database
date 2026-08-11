import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Weedle",
		'fr-fr': "Aspicot",
		'es-es': "Weedle",
		'it-it': "Weedle",
		'de-de': "Hornliu",
		'pt-br': "Weedle",
		'ko-kr': "뿔충이"
	},

	illustrator: "Hajime Kusajima",
	category: "Pokemon",

	dexId: [13],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Sting",
			'fr-fr': "Dard",
			'es-es': "Aguijonazo",
			'it-it': "Puntura",
			'de-de': "Einstich",
			'pt-br': "Ferroada",
			'ko-kr': "따끔따끔찌르기"
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
		'en-us': "Often found in forests and grasslands. It has a sharp, toxic barb of around two inches on top of its head.",
		'fr-fr': "On trouve souvent ce Pokémon dans les forêts\net les hautes herbes. L'aiguillon de 5 cm\nsur sa tête contient un venin très toxique.",
		'es-es': "Suele habitar bosques y praderas.\nTiene un afilado y venenoso aguijón\nde unos 5 cm encima de la cabeza.",
		'it-it': "Vive soprattutto nei boschi e nei prati. Sul capo\nha un affilato e velenoso pungiglione lungo 5 cm.",
		'de-de': "Es lebt bevorzugt in Wäldern und in hohem Gras.\nAuf dem Kopf trägt es einen circa 5 cm langen,\nspitzen, giftigen Stachel.",
		'pt-br': "Encontrado frequentemente em florestas e\npradarias. Possui uma farpa afiada e tóxica\nde cerca de 5 cm em cima da cabeça.",
		'ko-kr': "숲이나 풀밭에 많이 서식한다.\n머리끝에 5cm 정도의\n작고 날카로운 독침을 지니고 있다."
	},

	boosters: ["mewtwo"]
}

export default card
