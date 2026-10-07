import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	evolveFrom: { ja: "レドームシ" },
	dexId: [826],
	rarity: "Rare",
	set: Set,

	name: {
		ja: "イオルブ",
		'zh-tw': "以歐路普",
		th: "อิออร์บ"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "サイコパワーを 放ち 周囲を 調べている。 観測範囲は 周囲 １０キロにも 達するぞ。",
		'zh-tw': "釋放出精神力量來調查周圍的情況。牠的偵測範圍甚至可以達到方圓１０公里。",
		th: "ปล่อยพลังจิตเพื่อสำรวจบริเวณโดยรอบ สังเกตการณ์ได้ไกลถึง 10 กิโลเมตรเลยนะ"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			ja: "エボルコントロール",
			'zh-tw': "進化掌控",
			th: "อีโวคอนโทรล"
		},

		effect: {
			ja: "このポケモンについているエネルギーの数ぶんまで、自分の山札から2進化ポケモン（「イオルブ」をのぞく）を選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多與這隻寶可夢身上附加的能量相同數量的【2階進化】寶可夢卡（「以歐路普」除外），放置於備戰區。並且重洗牌庫。",
			th: "เลือกโปเกมอน [ร่าง2] (ยกเว้น [อิออร์บ]) จากสำรับการ์ดฝ่ายเราได้สูงสุดไม่เกินจำนวนพลังงานที่ติดที่โปเกมอนนี้ วางบนเบนช์ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			ja: "しねんのずつき",
			'zh-tw': "意念頭錘",
			th: "ท่าโขกหัวพลังจิต"
		},

		damage: 120,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 533762, tcgplayer: 569079, cardtrader: 240044 } }
	]
}

export default card