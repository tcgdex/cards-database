import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "南瓜精",
		th: "บาเค็จจะ",
		ja: "バケッチャ"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "南瓜的洞裡發出的光會催眠並控制 看到牠的人和寶可夢。",
		th: "แสงที่ส่องออกมาจากรูของฟักทองสามารถสะกดจิตและควบคุมมนุษย์หรือโปเกมอนที่มองแสงนั้น",
		ja: "かぼちゃの 穴から 照らしている 光は 見た 人や ポケモンを 催眠状態にして 操る。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "南瓜洞穴",
			th: "รูของฟักทอง",
			ja: "かぼちゃのあな"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。將場上的競技場卡丟棄。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง ทิ้งการ์ดสเตเดียมบนกระดานที่ตำแหน่งทิ้งการ์ด",
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。場に出ているスタジアムをトラッシュする。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "踩",
			th: "เหยียบ",
			ja: "ふむ"
		},

		damage: 20,
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
	regulationMark: "E",
	dexId: [710]
}

export default card