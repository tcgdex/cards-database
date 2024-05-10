import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ノコッチ",
		'zh-tw': "土龍弟弟",
		th: "โนก็อจจิ"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	dexId: [206],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "暗い場所に 迷路を 作る。 だれかに みられると 尻尾で 地面を 掘って 逃げようとする。",
		'zh-tw': "會在陰暗處做出迷宮。只要被誰看見就會 用尾巴挖掘地面逃走。",
		th: "สร้างทางวงกตในที่มืด พอมีคนเจอก็จะใช้หางขุดมุดดินหนี"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かじる",
			'zh-tw': "咬",
			th: "แทะ"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "あなをほる",
			'zh-tw': "挖洞",
			th: "ขุดรู"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card