import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Wooloo",
		fr: "Moumouton",
		es: "Wooloo",
		it: "Wooloo",
		de: "Wolly",
		'pt-br': "Wooloo",
		ko: "우르"
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
			en: "Tackle",
			fr: "Charge",
			es: "Placaje",
			it: "Azione",
			de: "Tackle",
			'pt-br': "Investida",
			ko: "몸통박치기"
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
		en: "Its curly fleece is such an effective cushion that this Pokémon could fall off a cliff and stand right back up at the bottom, unharmed.",
		fr: "Son pelage frisé est doux et rebondi comme un coussin.\nUne telle toison le protègerait même s'il chutait d'une falaise.",
		es: "Su lana rizada es tan acolchada que no se hace\ndaño ni aunque se caiga por un precipicio.",
		it: "Il suo vello riccioluto gli fornisce una\nperfetta imbottitura. Non si farebbe nulla\nnemmeno cadendo da un precipizio.",
		de: "Sein stark gelocktes Fell hat eine sehr polsternde\nWirkung. Selbst eine Klippe hinunterzufallen\nmacht ihm nichts aus.",
		'pt-br': "Sua lã cacheada é um amortecedor tão eficaz\nque este Pokémon pode desabar de um precipício\ne se levantar em seguida, completamente ileso.",
		ko: "곱슬곱슬한 털은\n훌륭한 쿠션 역할을 한다.\n절벽에서 떨어져도 아무렇지도 않다."
	},

	boosters: ["charizard", "mewtwo", "pikachu"]
}

export default card
