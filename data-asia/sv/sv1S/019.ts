import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ウミディグダ",
		'zh-tw': "海地鼠"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [960],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "２０メートル先の ミガルーサが 放つ 匂いも 嗅ぎとって 砂の中に 身を 隠すのだ。",
		'zh-tw': "就算身處於２０公尺外，牠都能嗅出輕身鱈散發出 的氣味，躲進沙子裡面藏身。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ちょっとほる",
			'zh-tw': "挖一下"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手の山札を上から1枚トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的牌庫上方1張卡丟棄。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ぶつかる",
			'zh-tw': "衝撞"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card