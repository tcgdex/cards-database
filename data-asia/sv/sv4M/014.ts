import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ミロカロス",
		'zh-tw': "美納斯"
	},

	illustrator: "Atsuya Uki",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [350],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "ミロカロスの 美しい 姿を 見た 者は 荒んだ 心が 癒されると いわれている。",
		'zh-tw': "據說目睹了美納斯美麗身姿的人，心中一切的憤恨都能得到撫慰。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "たすけぶね",
			'zh-tw': "慷慨解囊"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。おたがいのプレイヤーは、それぞれ自分のトラッシュからたねポケモンを1枚選び、自分のベンチに出す。（ベンチに出すのは相手から行う。）",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。雙方玩家各從自己的棄牌區選擇1張【基礎】寶可夢卡，放置於自己的備戰區。（由對手先進行放置。）"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "ヒプノスプラッシュ",
			'zh-tw': "昏睡飛濺"
		},

		damage: 60,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card