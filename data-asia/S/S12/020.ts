import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冰鬼護",
		th: "โอนิโกริ"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "擁有火焰也無法融化的冰之軀體。能讓空氣中的 水分在一瞬間凍結。",
		th: "ร่างน้ำแข็งที่ไม่ละลายแม้โดนไฟ สามารถทำให้น้ำในอากาศแข็งได้ในพริบตา"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "咬住",
			th: "กัดติด"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "大嘴",
			th: "บิ๊กเมาท์"
		},

		effect: {
			'zh-tw': "在這個回合，若從手牌使出了「小菘」，則增加130點傷害。",
			th: "เทิร์นนี้ ถ้านำการ์ด [ซุซุนะ] จากบนมือออกมาใช้แล้ว การโจมตีนี้จะเพิ่มแดเมจอีก 130"
		},

		damage: "130+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card