import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "コータス",
		'zh-tw': "煤炭龜",
		th: "โคทอยซ์"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [324],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "石炭が エネルギーの 源。 コータスの 棲んでいる 山には 多くの 石炭が 眠っている。",
		'zh-tw': "煤炭是牠的能量來源。 在煤炭龜棲息著的山裡， 沉睡著大量的煤炭。",
		th: "มีถ่านหินเป็นแหล่งพลังงาน ภูเขาที่โคทอยซ์อาศัยอยู่นั้นเต็มไปด้วยถ่านหิน"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "こうらでぶつかる",
			'zh-tw': "甲殼衝撞",
			th: "กระดองประจัญบาน"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]"
		}
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			ja: "ほのおのうず",
			'zh-tw': "火焰旋渦",
			th: "วงล้อไฟ"
		},

		damage: 110,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 761474
	}
}

export default card