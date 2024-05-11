import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 勇士雄鷹",
		th: "ฮิซุย วอร์เกิล",
		ja: "ヒスイ ウォーグル"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "勇猛的大鳥。狩獵時會發出 氣勢駭人的戰吼，朝湖水發出 衝擊波，捕捉浮出水面的獵物。",
		th: "เป็นนกใหญ่ดุร้ายที่คอยแผดเสียงสิงหนาทอันน่ากลัวเพื่อล่าเหยื่อ ปล่อยคลื่นกระแทกในทะเลสาบ แล้วจับเหยื่อที่ลอยขึ้นมาบนผิวน้ำ",
		ja: "鬼気迫る 鬨の声を 上げ 狩りをする 猛き 大鳥。 湖水に 衝撃波を 放ち 水面に 浮かびし 獲物を 捕る。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "不祥叫聲",
			th: "เสียงร้องแห่งลางร้าย",
			ja: "ぶきみななきごえ"
		},

		effect: {
			'zh-tw': "在對手的身上放置有傷害指示物的所有寶可夢身上，各放置3個傷害指示物。",
			th: "วางตัวนับแดเมจบนโปเกมอนฝ่ายตรงข้ามทุกตัวที่มีตัวนับแดเมจวางอยู่ ตัวละ 3 ตัว",
			ja: "ダメカンがのっている相手のポケモン全員に、それぞれダメカンを3個のせる。"
		}
	}, {
		name: {
			'zh-tw': "精神歪曲",
			th: "ไซโคทริป",
			ja: "サイコトリップ"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			ja: "相手のバトルポケモンをこんらんにする。"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [628]
}

export default card