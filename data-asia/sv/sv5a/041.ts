import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ガーディ",
		'zh-tw': "洗翠 卡蒂狗",
		th: "ฮิซุย การ์ดี"
	},

	illustrator: "Whisker",
	rarity: "Common",
	category: "Pokemon",
	dexId: [58],
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "対になりて 縄張りを 哨戒す。 体毛に 火成岩なる 成分 混ざるは 火山活動の 影響と 推察す。",
		'zh-tw': "兩隻一組共同負責地盤的警戒工作。體毛中混有火成岩的成分，可以 推想這是受到火山活動的影響。",
		th: "จับคู่กันเพื่อเฝ้าตรวจตราอาณาเขตของตน สันนิษฐานกันว่าส่วนประกอบของหินอัคนีที่ปะปนอยู่ในขนตามตัวนั้น น่าจะเกิดจากอิทธิพลของภูเขาไฟระเบิด"
	},

	stage: "Basic",

	attacks: [{


		name: {
			ja: "まるやけ",
			'zh-tw': "全部燒光",
			th: "เผาเตียน"
		},

		effect: {
			ja: "場に出ているスタジアムをトラッシュする。",
			'zh-tw': "將場上的競技場卡丟棄。",
			th: "ทิ้งการ์ดสเตเดียมที่วางอยู่บนกระดานที่ตำแหน่งทิ้งการ์ด"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "とっしん",
			'zh-tw': "猛撞",
			th: "พุ่งเข้าใส่"
		},

		damage: 40,

		effect: {
			ja: "このポケモンにも10ダメージ。",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card
