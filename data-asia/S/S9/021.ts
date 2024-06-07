import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈焰猴",
		ja: "ゴウカザル"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		'zh-tw': "用速度玩弄對手。會使用手腳並用的 獨特戰鬥方式。",
		ja: "素早さで 相手を 翻弄する。 両手 両足を 使った 独特の 戦い方を する。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "螺旋業火",
			ja: "らせんごうか"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方5張卡翻到正面。造成其中的能量卡的張數×80點傷害。將翻到正面的能量卡丟棄，將剩餘卡放回牌庫並重洗。",
			ja: "自分の山札を上から5枚オモテにする。その中にあるエネルギーの枚数×80ダメージ。オモテにしたエネルギーはトラッシュし、残りのカードは山札にもどして切る。"
		},

		damage: "80×",
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "燃燒踢",
			ja: "バーニングキック"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。",
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。"
		},

		damage: 160,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [392]
}

export default card