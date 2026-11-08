import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Alolan Rattata",
		'fr-fr': "Rattatad'Alola",
		'es-es': "Rattatade Alola",
		'it-it': "Rattatadi Alola",
		'de-de': "Alola-Rattfratz",
		'pt-br': "Rattatade Alola",
		'ko-kr': "알로라꼬렛"
	},

	illustrator: "nagimiso",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [19],
	hp: 50,
	types: ["Darkness"],

	description: {
		'en-us': "It shows no interest in anything that isn't fresh. If you take it shopping with you, it will help you pick out ingredients.",
		'fr-fr': "Ce Pokémon difficile n'aime que les produits\nextra-frais. Faites vos emplettes avec lui,\ncar son flair s'avérera très utile !",
		'es-es': "Solo muestra interés por los productos más frescos, lo que lo\nconvierte en un valioso aliado a la hora de hacer la compra.",
		'it-it': "È interessato solo al cibo fresco e questo lo\nrende un aiutante prezioso nella scelta degli\ningredienti migliori quando si va a fare spesa.",
		'de-de': "Es zeigt nur an frischen Dingen Interesse.\nNimmt man es mit zum Einkaufen, hilft es\neinem bei der Auswahl von Zutaten.",
		'pt-br': "Não demonstra interesse em algo que não seja fresco.\nSe você levar este Pokémon às compras, ele ajudará\na escolher os ingredientes.",
		'ko-kr': "신선한 것에만 흥미를 보인다.\n장을 볼 때 데려가면\n식재료 고를 때 도움이 된다."
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
	boosters: ["lunala"]
}

export default card