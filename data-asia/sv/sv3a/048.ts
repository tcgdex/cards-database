import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ザシアン",
		'zh-tw': "蒼響",
		th: "ซาเชียน"
	},

	illustrator: "Tonji Matsuno",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [888],
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "あらゆるものを 切り捨てるさまから 妖精王の剣 と 呼ばれ 敵味方に 恐れ崇められた。",
		'zh-tw': "能斬斷世間萬物，因此被稱為妖精王之劍， 讓敵友都對牠敬畏不已。",
		th: "สามารถฟันทุกอย่างให้ขาดได้จนถูกขนานนามว่าดาบของราชาแห่งภูติ เป็นที่เคารพยำเกรงจากทั้งมิตรและศัตรู"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "てつのほうこう",
			'zh-tw': "鐵之咆哮",
			th: "เสียงคำรามแห่งเหล็ก"
		},

		damage: 30,

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を1枚選び、ベンチポケモンにつける。",
			'zh-tw': "從自己的棄牌區選擇1張「基本【鋼】能量」卡，附於備戰寶可夢身上。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[โลหะ]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์"
		}
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			ja: "ブレイブキャリバー",
			'zh-tw': "無畏聖劍",
			th: "เบรฟคาลิเบอร์"
		},

		damage: 130,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card