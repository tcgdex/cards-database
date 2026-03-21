import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "飄浮泡泡",
		ja: "ポワルン"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "樣子會隨著天氣而變化。天氣越是惡劣， 性情就會變得越粗暴。",
		ja: "天気に よって 姿が 変わる。 気象が 荒くなるほど 気性も 荒っぽく なってくる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雙重抽出",
			ja: "ダブルドロー"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出2張卡。",
			ja: "自分の山札を2枚引く。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "暴風",
			ja: "ぼうふう"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的基本能量，改附於備戰寶可夢身上。",
			ja: "このポケモンについている基本エネルギーを1個選び、ベンチポケモンにつけ替える。"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [351],

	thirdParty: {
		cardmarket: 605928
	}
}

export default card