import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "人造細胞卵",
		th: "แลนคูลัส",
		ja: "ランクルス"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "比起使用超能力，牠更喜歡靠著揮動 自傲的手臂來打倒對手。",
		th: "ชอบใช้พลังที่ตัวเองภูมิใจต่อยทำลายมากกว่าใช้พลังจิต",
		ja: "超能力を 使うよりも 自慢の 腕を ぶん回して 殴り倒すのを 好んでいる。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "不朽細胞",
			th: "เซลล์อมตะ",
			ja: "くちないさいぼう"
		},

		effect: {
			'zh-tw': "當這隻寶可夢受到對手的寶可夢招式的傷害而【氣絕】時，不丟棄這隻寶可夢，而是放回手牌。（寶可夢以外的卡全部丟棄。）",
			th: "โปเกมอนนี้ เมื่อได้รับแดเมจจากท่าต่อสู้ของโปเกมอนฝ่ายตรงข้ามแล้ว[หมดสภาพ] ให้นำกลับขึ้นมือ โดยไม่ต้องทิ้งที่ตำแหน่งทิ้งการ์ด (ทิ้งการ์ดทุกใบที่ไม่ใช่โปเกมอนที่ตำแหน่งทิ้งการ์ด)",
			ja: "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、トラッシュせず、手札にもどす。（ポケモン以外のカードは、すべてトラッシュする。）"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "細胞叉",
			th: "เซลล์ฟอร์ก",
			ja: "セルフォーク"
		},

		effect: {
			'zh-tw': "在對手的2隻備戰寶可夢身上，各放置3個傷害指示物。",
			th: "วางตัวนับแดเมจบนโปเกมอนบนเบนช์ฝ่ายตรงข้าม 2 ตัว ตัวละ 3 ตัว",
			ja: "相手のベンチポケモン2匹に、それぞれダメカンを3個のせる。"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [579]
}

export default card