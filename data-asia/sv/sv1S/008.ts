import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "オリーヴァ"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [930],
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "穏やかで とても 慈悲深い。 栄養豊富な 美味しい オイルを 弱った ポケモンに 分け与える。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "まんたんオイル"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のポケモン1匹のHPを、すべて回復する。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "ソーラービーム"
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card