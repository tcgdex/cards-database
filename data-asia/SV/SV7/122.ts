import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "太樂巴戈斯ex",
		'zh-cn': "太樂巴戈斯ex",
		ja: "テラパゴスex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "聯盟擊",
			'zh-cn': "聯盟擊",
			ja: "ユニオンビート"
		},

		effect: {
			'zh-tw': "這個招式在後攻玩家的最初回合無法使用。造成自己的備戰寶可夢的數量×30點傷害。",
			'zh-cn': "這個招式在後攻玩家的最初回合無法使用。造成自己的備戰寶可夢的數量×30點傷害。",
			ja: "このワザは、後攻プレイヤーの最初の番には使えない。自分のベンチポケモンの数×30ダメージ。"
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "皇冠蛋白石",
			'zh-cn': "皇冠蛋白石",
			ja: "クラウンオパール"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢（【無】寶可夢除外）招式的傷害。",
			'zh-cn': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢（【無】寶可夢除外）招式的傷害。",
			ja: "次の相手の番、このポケモンはたねポケモン（ポケモンをのぞく）からワザのダメージを受けない。"
		},

		damage: 180,
		cost: ["Grass", "Water", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "None"
}

export default card