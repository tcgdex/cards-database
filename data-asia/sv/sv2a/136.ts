import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブースター",
		'zh-tw': "火伊布"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [136],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "吸いこんだ 空気を 体内の 炎袋に 送りこみ １７００度の 炎にして 吹く。",
		'zh-tw': "會將吸入的空氣送進體內的火囊轉化成 １７００度的火焰後再吐出來。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "はかいび",
			'zh-tw': "破壞火"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "とうしのもうか",
			'zh-tw': "鬥志猛火"
		},

		damage: "90+",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンex・V」なら、90ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card