import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナカヌチャン",
		'zh-tw': "巧鍛匠",
		th: "นาคานุจัง",
		id: "Tinkatuff"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	dexId: [958],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "大きくて 頑丈な ハンマーを 作るために キリキザンの 群れを 襲って 金属を 集める。",
		'zh-tw': "為了製作又大又堅固的錘子，會去襲擊劈斬司令 的群體，藉以收集金屬。",
		th: "จะโจมตีฝูงคิริคิซันและรวบรวมโลหะมาเพื่อสร้างค้อนที่มีขนาดใหญ่และแข็งแรง",
		id: "Untuk membuat palu yang besar dan kuat, Tinkatuff menyerang kelompok Bisharp dan mengumpulkan logam dari mereka."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "じゃれつく",
			'zh-tw': "嬉鬧",
			th: "คลอเคลีย",
			id: "Main Kasar"
		},

		damage: "30+",

		effect: {
			ja: "コインを1回投げオモテなら、30ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 30",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 30."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ふんさいプレス",
			'zh-tw': "粉碎壓制",
			th: "บดอัด",
			id: "Tekanan Demolisi"
		},

		damage: 60,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			'zh-tw': "這個招式的傷害不計算對手的戰鬥寶可夢身上的附加效果。",
			th: "แดเมจของท่าต่อสู้นี้ จะไม่นำเอฟเฟกต์ที่มีผลอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมาคิด",
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh efek yang sedang dialami Pokémon Bertarung lawan."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card