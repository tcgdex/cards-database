import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "マグカルゴex",
		'zh-tw': "熔岩蝸牛ex",
		th: "มักคาร์โกex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "あついマグマ",
			'zh-tw': "熾熱熔岩",
			th: "แม็กมาร้อน"
		},

		damage: 70,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "グラウンドバーン",
			'zh-tw': "大地灼燒",
			th: "กราวนด์เบิร์น"
		},

		damage: "140+",

		effect: {
			ja: "おたがいの山札を上から1枚ずつトラッシュし、その中にあるエネルギーの枚数×140ダメージ追加。",
			'zh-tw': "將雙方的牌庫上方各1張卡丟棄，增加其中能量卡的張數×140點傷害。",
			th: "ทิ้งการ์ดจากด้านบนของสำรับการ์ดของทั้งสองฝ่ายฝ่ายละ 1 ใบที่ตำแหน่งทิ้งการ์ด แดเมจจะเพิ่มตามจำนวนการ์ดพลังงานที่อยู่ในนั้น x140"
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