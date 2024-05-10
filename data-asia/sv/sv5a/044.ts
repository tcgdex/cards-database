import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ダイノーズ",
		'zh-tw': "大朝北鼻",
		th: "ไดโนซ"
	},

	illustrator: "OKUBO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [476],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "強い 磁力を 放っているので 近くにある 電化製品は 使いものに ならなくなってしまう。",
		'zh-tw': "因為會釋放強大的磁力， 導致附近的電器都變得 無法使用。",
		th: "เนื่องจากมันแผ่พลังแม่เหล็กรุนแรงออกมา จึงทำให้เครื่องใช้ไฟฟ้าที่อยู่บริเวณใกล้เคียงใช้งานไม่ได้"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "アサルトレーザー",
			'zh-tw': "進擊鐳射",
			th: "แอสซอลต์เลเซอร์"
		},

		damage: "80+",

		effect: {
			ja: "相手のバトルポケモンに「ポケモンのどうぐ」がついているなら、80ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢身上附有「寶可夢道具」卡，則增加80點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมี [ไอเท็มติดโปเกมอน] ติดอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 80"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ランドクラッシュ",
			'zh-tw': "大地粉碎",
			th: "แลนด์ครัช"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card