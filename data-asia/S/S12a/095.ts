import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "三合一磁怪",
		th: "แรคอยล์",
		ja: "レアコイル"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'zh-tw': "由３隻小磁怪連結而成。會發射出強烈的電波 來觀測周圍的狀況。",
		th: "มาจากคอยล์สามตัวเชื่อมต่อกัน ปล่อยคลื่นแม่เหล็กไฟฟ้าอันทรงพลังเพื่อสังเกตการณ์บริเวณโดยรอบ",
		ja: "３匹の コイルが 連結した。 強力な 電波を 放ち まわりの 様子を 観測する。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "彈回",
			th: "กระดอนกลับ",
			ja: "はねかえす"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
			th: "สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ [ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้]",
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
		},

		damage: 50,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [82],

	thirdParty: {
		cardmarket: 687657
	}
}

export default card