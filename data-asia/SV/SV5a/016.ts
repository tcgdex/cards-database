import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "モウカザル",
		'zh-tw': "猛火猴",
		th: "โมคาซารุ"
	},

	illustrator: "Scav",
	rarity: "Common",
	category: "Pokemon",
	dexId: [391],
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "尻尾の 炎の 勢いを うまく コントロールして 自分の 得意な 間合いで 戦うのだ。",
		'zh-tw': "能熟練地控制尾部火焰的火勢， 以自己擅長的距離進行戰鬥。",
		th: "สามารถปรับความแรงของไฟที่ก้นได้เป็นอย่างดีเพื่อต่อสู้ในระยะห่างที่ตนถนัด"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "チョップ",
			'zh-tw': "劈打",
			th: "สับ"
		},

		damage: 40
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ヒートブロー",
			'zh-tw': "高溫打擊",
			th: "ฮีทโบลว์"
		},

		damage: 80,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card