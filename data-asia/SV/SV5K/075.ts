import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ランクルス",
		'zh-tw': "人造細胞卵",
		th: "แลนคูลัส"
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	dexId: [579],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "超能力を 使うよりも 自慢の 腕を ぶん回して 殴り倒すのを 好んでいる。",
		'zh-tw': "比起使用超能力，牠更喜歡靠著揮動 自傲的手臂來打倒對手。",
		th: "ชอบใช้พลังที่ตัวเองภูมิใจต่อยทำลายมากกว่าใช้พลังจิต"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "サモンゲート",
			'zh-tw': "傳喚之門",
			th: "ซัมมอนเกต"
		},

		effect: {
			ja: "自分の山札を上から8枚見て、その中からポケモンを好きなだけ選び、ベンチに出す。残りのカードは山札にもどして切る。",
			'zh-tw': "查看自己的牌庫上方8張卡，從其中選擇任意數量的寶可夢卡，放置於備戰區。將剩餘卡放回牌庫並重洗。",
			th: "ดูการ์ด 8 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ดโปเกมอนจากในนั้นตามจำนวนที่ชอบ วางบนเบนช์ การ์ดที่เหลือใส่กลับไปในสำรับการ์ดแล้วสับ"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ブレインシェイク",
			'zh-tw': "腦力震動",
			th: "เบรนเชค"
		},

		damage: 100,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card