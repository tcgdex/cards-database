import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ポッポ",
		'zh-tw': "波波",
		th: "ป็อปโปะ"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	dexId: [16],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "戦いを 好まない おとなしい 性格だが 下手に 手を 出すと 強烈に 反撃されるぞ。",
		'zh-tw': "雖然性情溫和不愛戰鬥，但要是隨意對牠出手的話，就會受到牠強烈的反擊。",
		th: "มีนิสัยสงบเสงี่ยม ไม่ชอบต่อสู้ แต่ถ้าเผลอไปหาเรื่องมันเข้าล่ะก็ จะถูกโต้กลับอย่างรุนแรงเอานะ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かぜおこし",
			'zh-tw': "起風",
			th: "เรียกลม"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card