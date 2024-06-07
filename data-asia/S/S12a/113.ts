import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 黏美兒",
		th: "ฮิซุย นูเมล",
		ja: "ヒスイ ヌメイル"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		'zh-tw': "性情陰沉。據考察，洗翠地區的水中 含有的鐵質對皮膚的黏液產生作用， 使其變化成了金屬外殼。",
		th: "มีนิสัยมืดมน จากการศึกษาพบว่า เหล็กในภูมิภาคฮิซุยที่มีน้ำปนอยู่จะทำปฏิกิริยากับเยื่อเมือกตามผิวหนัง และทำให้เปลี่ยนรูปกลายเป็นเปลือกโลหะ",
		ja: "陰気な 性質。 ヒスイの地の 水に 含有する 鉄が 皮膚の粘液に 作用し 金属の殻へ 変容させたと 考察す。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "硬化",
			th: "แข็งเกร็ง",
			ja: "こうちょく"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-50」點。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับ จะถูก [-50]",
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。"
		}
	}, {
		name: {
			'zh-tw': "重摑",
			th: "ตบแรง",
			ja: "ひっぱたく"
		},

		damage: 40,
		cost: ["Water", "Metal"]
	}],

	retreat: 3,
	regulationMark: "F",
	dexId: [705]
}

export default card