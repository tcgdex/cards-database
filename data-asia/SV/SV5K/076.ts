import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ハバタクカミ",
		'zh-tw': "振翼髮",
		th: "เกศากระพือ"
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	dexId: [987],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "とある 書物に 登場する ハバタクカミという 生物と 似た 特徴を 持つ ポケモン。",
		'zh-tw': "與某本書裡記載的一種叫做振翼髮的生物有著 相似特徵的寶可夢。",
		th: "โปเกมอนที่มีลักษณะเด่นเหมือนกับสิ่งมีชีวิตที่เรียกว่าเกศากระพือที่ปรากฏตัวในบันทึกเล่มหนึ่ง"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "あんやのはばたき",
			'zh-tw': "暗夜羽擊",
			th: "สยายปีกคืนเดือนมืด"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンの特性（「あんやのはばたき」をのぞく）は、すべてなくなる。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的戰鬥寶可夢的特性（「暗夜羽擊」除外）全部消除。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่บนตำแหน่งต่อสู้ ความสามารถของโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม (ยกเว้น [สยายปีกคืนเดือนมืด]) ทั้งหมดจะหายไป"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "たたりとばす",
			'zh-tw': "飛來橫禍",
			th: "ปล่อยอาถรรพ์"
		},

		damage: 90,

		effect: {
			ja: "ダメカン2個を、相手のベンチポケモンに好きなようにのせる。",
			'zh-tw': "將2個傷害指示物以任意方式放置於對手的備戰寶可夢身上。",
			th: "วางตัวนับแดเมจ 2 ตัว บนโปเกมอนบนเบนช์ฝ่ายตรงข้ามตามชอบ"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card