import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "土台龜",
		th: "โดไดโทส",
		ja: "ドダイトス"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	description: {
		'zh-tw': "有時候小型的寶可夢們會聚集起來，在一動不動的 土台龜背上築起巢穴。",
		th: "บางครั้งบรรดาโปเกมอนขนาดเล็กจะมารวมตัวกันสร้างรังอยู่บนหลังโดไดโทสที่อยู่นิ่งไม่ขยับตัว",
		ja: "小さな ポケモンたちが 集まり 動かない ドダイトスの 背中で 巣作りを はじめることがある。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "進化壓制",
			th: "อีโวเพรส",
			ja: "エボルプレス"
		},

		effect: {
			'zh-tw': "造成自己的場上進化寶可夢的數量×50點傷害。",
			th: "แดเมจจะเท่ากับจำนวนโปเกมอนวิวัฒนาการบนกระดานฝ่ายเรา x50",
			ja: "自分の場の進化ポケモンの数×50ダメージ。"
		},

		damage: "50×",
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "頭突",
			th: "ตบหนัก",
			ja: "ぶちかます"
		},

		damage: 160,
		cost: ["Grass", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F",
	dexId: [389],

	thirdParty: {
		cardmarket: 687488
	}
}

export default card