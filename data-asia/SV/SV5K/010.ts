import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤクデ",
		'zh-tw': "燒火蚣",
		th: "ยาคุเดะ",
		ko: "태우지네"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	dexId: [850],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "体に 溜めた 可燃ガスで 発熱。 とくに お腹の 黄色い 部分が 熱いのだ。",
		'zh-tw': "靠儲存在體內的可燃氣體來發熱。熱度最高的是 腹部的黃色部分。",
		th: "ปล่อยความร้อนจากแก๊สเผาไหม้ที่กักไว้ในร่าง โดยเฉพาะส่วนสีเหลืองตรงท้องนั้นร้อนมาก",
		ko: "몸속에 모아둔 가연성 가스로 열을 낸다. 특히 배 쪽의 노란 부분이 뜨겁다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ヒートダイブ",
			'zh-tw': "高溫奇襲",
			th: "ฮีทไดฟ์",
			ko: "히트다이브"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			ko: "이 포켓몬에게도 10데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card