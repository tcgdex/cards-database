import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "超夢V",
		th: "มิวทูV",
		ja: "ミュウツーV"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 220,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "超念力",
			th: "ซูเปอร์โทรจิต",
			ja: "ちょうねんりき"
		},

		damage: 50,
		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "轉移破壞",
			th: "ทรานส์เบรก",
			ja: "トランスブレイク"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，改附於備戰寶可夢身上。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์",
			ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。"
		},

		damage: 160,
		cost: ["Psychic", "Psychic", "Colorless"]
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
	rarity: "Double rare"
}

export default card