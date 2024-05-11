import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷丘V",
		ja: "ライチュウV"
	},

	illustrator: "MUGENUP",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "急速蓄電",
			ja: "ファストチャージ"
		},

		effect: {
			'zh-tw': "這個招式在先攻玩家的最初回合也可使用。從自己的牌庫選擇1張【雷】能量卡，附於這隻寶可夢身上。並且重洗牌庫。",
			ja: "このワザは、先攻プレイヤーの最初の番でも使える。自分の山札からエネルギーを1枚選び、このポケモンにつける。そして山札を切る。"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "極限電光",
			ja: "ダイナミックスパーク"
		},

		effect: {
			'zh-tw': "將自己的場上寶可夢身上附加的任意數量的【雷】能量卡丟棄，造成其張數×60點傷害。",
			ja: "自分の場のポケモンについているエネルギーを好きなだけトラッシュし、その枚数×60ダメージ。"
		},

		damage: "60×",
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card