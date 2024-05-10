import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ウミトリオex",
		'zh-tw': "三海地鼠ex",
		th: "อุมิทริโอex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Lightning"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "トリコロポンプ",
			'zh-tw': "三色炮",
			th: "ปั๊มพ์สามสี"
		},

		effect: {
			ja: "自分の手札からエネルギーを3枚までトラッシュし、その枚数×60ダメージを、相手のポケモン1匹に与える。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "從自己的手牌將最多3張能量卡丟棄，對對手的1隻寶可夢，造成其張數×60點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทิ้งการ์ดพลังงานได้สูงสุด 3 ใบจากบนมือฝ่ายเราที่ตำแหน่งทิ้งการ์ด ทำแดเมจกับโปเกมอนฝ่ายตรงข้าม 1 ตัวเท่ากับจำนวนการ์ดนั้น x60 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "しびれホールド",
			'zh-tw': "麻痺控制",
			th: "เกาะติดตัวชา"
		},

		damage: 120,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card