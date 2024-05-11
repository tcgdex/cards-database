import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夜巡靈",
		th: "โยมาวารุ",
		ja: "ヨマワル"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說一旦發現不聽話的孩子，牠就會在深夜裡把那個孩子 帶去某個不知名的地方。",
		th: "ว่ากันว่าหากเจอเด็กที่ไม่เชื่อฟังคำสั่งสอน ตกกลางคืนจะลักพาตัวไปยังที่ ๆ ไม่มีใครรู้",
		ja: "いいつけを 守らない 子供を 見つけると 夜中に どこかへ 連れていくと いわれている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "蠱惑",
			th: "ทำให้สับสน",
			ja: "まどわす"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【混亂】。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。"
		},

		damage: 10,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [355]
}

export default card