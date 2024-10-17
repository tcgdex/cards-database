import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電蜘蛛ex",
		'zh-cn': "電蜘蛛ex",
		ja: "デンチュラex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Lightning"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "衝天之線",
			'zh-cn': "衝天之線",
			ja: "アッパースレッド"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加110點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加110點傷害。",
			ja: "相手のバトルポケモンが「ポケモンex・V」なら、110ダメージ追加。"
		},

		damage: "110＋",
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			'zh-tw': "雷擊石",
			'zh-cn': "雷擊石",
			ja: "フルグライト"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。在下個對手的回合，對手無法從手牌使出物品卡。",
			'zh-cn': "將這隻寶可夢身上附加的能量卡全部丟棄。在下個對手的回合，對手無法從手牌使出物品卡。",
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。次の相手の番、相手は手札からグッズを出して使えない。"
		},

		damage: 180,
		cost: ["Grass", "Lightning", "Fighting"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "None"
}

export default card