import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "マクノシタ"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [296],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "厳しい 稽古を 繰り返して 強くなる。 どんな 攻撃にも 耐える 根性の ポケモン。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "はりて"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3
}

export default card