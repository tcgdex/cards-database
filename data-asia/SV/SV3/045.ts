import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "トゲキッス",
		'zh-tw': "波克基斯",
		th: "โทเกคิส"
	},

	illustrator: "Cona Nitanda",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [468],
	hp: 150,
	types: ["Psychic"],

	description: {
		ja: "恵みを 与える 存在と 言われており 大昔から 縁起物に 描かれてきた。",
		'zh-tw': "被稱為帶來恩惠的寶可夢，從很久很久以前開始，人們就視牠為吉祥之物。",
		th: "ว่ากันว่าเป็นผู้นำพรมาให้ ตั้งแต่สมัยโบราณพรรณนากันมาว่าเป็นของประดับเพื่อความเป็นมงคล"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "プレシャスギフト",
			'zh-tw': "貴重之禮",
			th: "พรีเชียสกิฟต์"
		},

		effect: {
			ja: "自分の番の終わりに1回使える。自分の手札が8枚になるように、山札を引く。",
			'zh-tw': "在自己的回合結束時可使用1次。從牌庫抽卡直到自己的手牌滿8張為止。",
			th: "ใช้ได้ 1 ครั้งเมื่อจบเทิร์นฝ่ายเรา จั่วการ์ดจากสำรับการ์ด จนได้การ์ดบนมือฝ่ายเราเป็น 8 ใบ"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "パワーサイクロン",
			'zh-tw': "能量旋風",
			th: "พาวเวอร์ไซโคลน"
		},

		damage: 110,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 723986
	}
}

export default card