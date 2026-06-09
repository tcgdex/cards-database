import { Card } from "../../../interfaces"
import Set from "../SV5a"

const card: Card = {
	set: Set,

	name: {
		ja: "マグマッグ",
		'zh-tw': "熔岩蟲",
		th: "มักแม็ก"
	},

	illustrator: "Gapao",
	rarity: "Common",
	category: "Pokemon",
	dexId: [218],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "火山が 活発だった 太古の 世界では 今よりも たくさんの マグマッグが 暮らしていたという。",
		'zh-tw': "聽說在火山活動頻繁的 太古時代，世界上生活著 比現在更多的熔岩蟲。",
		th: "ว่ากันว่าในโลกสมัยโบราณที่ภูเขาไฟยังคงคุกรุ่นนั้น มีมักแม็กอาศัยอยู่เป็นจำนวนมากมายยิ่งกว่าที่มีในปัจจุบัน"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "あついマグマ",
			'zh-tw': "熾熱熔岩",
			th: "แม็กมาร้อน"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 761472
	}
}

export default card