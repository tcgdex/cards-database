import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゲコガシラ",
		'zh-tw': "呱頭蛙",
		th: "เกโคกาชิระ"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	dexId: [657],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "泡で 包んだ 小石を 投げる 技を 使う。３０メートル 先の 空き缶に 当てる コントロール。",
		'zh-tw': "會使出用泡泡包著小石頭 擲出的招式。有著能擊中 ３０公尺外空罐子的精準度。",
		th: "ใช้ท่าขว้างก้อนหินที่ปกคลุมด้วยฟอง สามารถเล็งให้โดนกระป๋องเปล่าที่อยู่ห่างออกไป 30 เมตรได้"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "しびれみず",
			'zh-tw': "麻麻水",
			th: "น้ำทำให้ชา"
		},

		damage: 20,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card