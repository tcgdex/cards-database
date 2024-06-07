import { Card } from "../../../interfaces"
import Set from "../SK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪妖女",
		ja: "ユキメノコ"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "會吐出零下５０度的冷氣凍住獵物，並把牠們帶回自己的巢穴，整齊地擺成一排。",
		ja: "マイナス５０度の 冷気を 吐き 凍らせた 獲物を すみかに 持ち帰り きれいに 並べる。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "降霜",
			ja: "しもふらし"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。從自己的棄牌區選擇1張【水】能量卡，附於自己的寶可夢身上。",
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュからエネルギーを1枚選び、自分のポケモンにつける。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "水晶吐息",
			ja: "クリスタルブレス"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			ja: "次の自分の番、このポケモンはワザが使えない。"
		},

		damage: 90,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	dexId: [478]
}

export default card