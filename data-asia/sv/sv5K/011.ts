import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "マルヤクデ",
		'zh-tw': "焚焰蚣",
		th: "มารุยาคุเดะ"
	},

	illustrator: "Krgc",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [851],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "発熱時の 体温は およそ ８００度。 体を 鞭のように しならせて 跳びかかってくるぞ。",
		'zh-tw': "發熱時的體溫大約有８００度。會像鞭子那樣彎曲身體， 朝著敵人彈跳過去。",
		th: "อุณหภูมิร่างยามปล่อยความร้อนประมาณ 800 องศาเซลเซียส โค้งร่างราวกับแส้แล้วพุ่งลงมาโจมตี"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "こがす",
			'zh-tw': "灼熱",
			th: "เผา"
		},

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]"
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "くろこげブレス",
			'zh-tw': "焦黑吐息",
			th: "ลมหายใจเผาเกรียม"
		},

		damage: 180,

		effect: {
			ja: "相手のバトルポケモンがやけどでないなら、このワザは失敗。",
			'zh-tw': "若對手的戰鬥寶可夢沒有【灼傷】，則這個招式失敗。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามไม่เป็นสภาวะ[ไหม้] ท่าต่อสู้นี้จะล้มเหลว"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card