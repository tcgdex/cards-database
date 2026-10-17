import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ランターン"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [171],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		ja: "チョンチー"
	},

	description: {
		ja: "深海を 泳ぐ ランターンの 明かりは 水面まで 届く。 深海の星 と 呼ばれている。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "スペシャルタックル"
		},

		effect: {
			ja: "このポケモンに特殊エネルギーがついているなら、30ダメージを追加。"
		},

		damage: "30+",
		cost: ["Lightning"]
	}, {
		name: {
			ja: "げきでんりゅう"
		},

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
		},

		damage: 90,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567861, tcgplayer: 602211, cardtrader: 142993 }, stamp: ["1st-edition"] }
	]
}

export default card
