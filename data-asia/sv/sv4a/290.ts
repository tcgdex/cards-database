import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "マニューラ",
		'zh-tw': "瑪狃拉"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	dexId: [461],
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "進化して さらに ずる賢くなり ツメで 石に サインをつけて コミュニケーションを はかっている。",
		'zh-tw': "進化後變得更加狡詐，會用爪子在石頭上 留下記號和夥伴交流。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "アサルトハント",
			'zh-tw': "進擊狩獵"
		},

		effect: {
			ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。相手のベンチのたねポケモンを1匹選び、バトルポケモンと入れ替える。",
			'zh-tw': "在自己的回合，從備戰區將這隻寶可夢放置於戰鬥場時，可使用1次。選擇1隻對手的備戰區的【基礎】寶可夢，與戰鬥寶可夢互換。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "スラッシュクロー",
			'zh-tw': "利爪揮砍"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card