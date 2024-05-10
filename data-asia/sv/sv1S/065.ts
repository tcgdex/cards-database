import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ムクホーク",
		'zh-tw': "姆克鷹"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [398],
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "ムクホークになると 群れから 離れて １匹で 生きていく。 強靭な 翼を 持っている。",
		'zh-tw': "變成姆克鷹後，就會脫離群體獨自生活。 擁有強韌的翅膀。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "きりもみアウェイ",
			'zh-tw': "旋衝離閃"
		},

		damage: 60,

		effect: {
			ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。",
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢招式的傷害。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "パワーブラスト",
			'zh-tw': "力量爆破"
		},

		damage: 180,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card