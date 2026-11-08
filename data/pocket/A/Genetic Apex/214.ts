import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wooloo",
		'fr-fr': "Moumouton",
		'es-es': "Wooloo",
		'it-it': "Wooloo",
		'de-de': "Wolly",
		'pt-br': "Wooloo",
		'ko-kr': "우르"
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",

	dexId: [831],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'de-de': "Tackle",
			'pt-br': "Investida",
			'ko-kr': "몸통박치기"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		'en-us': "Its curly fleece is such an effective cushion that this Pokémon could fall off a cliff and stand right back up at the bottom, unharmed.",
		'fr-fr': "Son pelage frisé est doux et rebondi comme un coussin.\nUne telle toison le protègerait même s'il chutait d'une falaise.",
		'es-es': "Su lana rizada es tan acolchada que no se hace\ndaño ni aunque se caiga por un precipicio.",
		'it-it': "Il suo vello riccioluto gli fornisce una\nperfetta imbottitura. Non si farebbe nulla\nnemmeno cadendo da un precipizio.",
		'de-de': "Sein stark gelocktes Fell hat eine sehr polsternde\nWirkung. Selbst eine Klippe hinunterzufallen\nmacht ihm nichts aus.",
		'pt-br': "Sua lã cacheada é um amortecedor tão eficaz\nque este Pokémon pode desabar de um precipício\ne se levantar em seguida, completamente ileso.",
		'ko-kr': "곱슬곱슬한 털은\n훌륭한 쿠션 역할을 한다.\n절벽에서 떨어져도 아무렇지도 않다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
