import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ブロロン",
		'zh-tw': "噗隆隆[進化前分岐α]"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	dexId: [965],
	hp: 60,
	types: ["Metal"],

	description: {
		ja: "スクラップ工場に 放置された エンジンに 謎の 毒ポケモンが 入り込んで 生まれたと 言われる。",
		'zh-tw': "據說牠是神秘的毒寶可夢 鑽進了被放置在廢鐵工廠 的引擎裡而誕生的。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "かいてんドロー",
			'zh-tw': "迴轉抽出"
		},

		damage: 10,

		effect: {
			ja: "自分の山札を1枚引く。",
			'zh-tw': "從自己的牌庫抽出1張卡。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card