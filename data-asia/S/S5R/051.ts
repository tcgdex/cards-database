import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [892],
	evolveFrom: { ja: "れんげきウーラオスV" },
	rarity: "Triple Rare",
	set: Set,

	name: {
		ja: "れんげきウーラオスVMAX",
		'zh-tw': "連擊武道熊師VMAX",
		th: "วูลาโอส จู่โจมต่อเนื่องVMAX"
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	stage: "VMAX",

	attacks: [{
		name: {
			ja: "しっぷうづき",
			'zh-tw': "疾風直撞",
			th: "พุ่งชนดั่งพายุ"
		},

		effect: {
			ja: "この番、このポケモンがベンチからバトル場に出ていたなら、120ダメージ追加。",
			'zh-tw': "在這個回合，若從備戰區將這隻寶可夢放置於戰鬥場，則增加120點傷害。",
			th: "ในเทิร์นนี้ ถ้าโปเกมอนนี้ออกจากเบนช์มาที่ตำแหน่งต่อสู้ การโจมตีนี้จะเพิ่มแดเมจอีก 120"
		},

		damage: "30+",
		cost: ["Fighting"]
	}, {
		name: {
			ja: "キョダイレンゲキ",
			'zh-tw': "超極巨流水連擊",
			th: "กิกะจู่โจมต่อเนื่อง"
		},

		effect: {
			ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のポケモン2匹に、それぞれ120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄，對手的2隻寶可夢各受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทิ้งพลังงานทั้งหมดที่ติดกับโปเกมอนนี้ที่ตำแหน่งทิ้งการ์ดและโปเกมอนฝ่ายตรงข้าม 2 ตัว จะได้รับแดเมจตัวละ 120 [โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด]"
		},

		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 533827, tcgplayer: 569092, cardtrader: 240062 } }
	]
}

export default card