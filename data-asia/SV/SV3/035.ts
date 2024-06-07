import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "シビルドン",
		'zh-tw': "麻麻鰻魚王",
		th: "ชิบิรูดอน"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [604],
	hp: 160,
	types: ["Lightning"],

	description: {
		ja: "腕の 力で 海から はい出し 水辺の 獲物に 襲いかかる。 一瞬で 海へ 引きずりこむ。",
		'zh-tw': "用手臂的力量從大海裡爬出，襲擊水邊的獵物。會瞬間將獵物拖入海中。",
		th: "จะใช้แขนอันทรงพลังคืบคลานตัวขึ้นจากทะเลเล่นงานเหยื่อที่อยู่บริเวณริมน้ำ จากนั้นจะลากลงทะเลในชั่วพริบตา"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "きゅういんショック",
			'zh-tw': "吸納衝擊",
			th: "ดูดมาให้ช็อก"
		},

		effect: {
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに60ダメージ。コインを1回投げオモテなら、そのポケモンをマヒにする。",
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到60點傷害。擲1次硬幣若為正面，則將那隻寶可夢【麻痺】。",
			th: "เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้ หลังจากนั้น ทำแดเมจ 60 กับโปเกมอนที่เพิ่งออกมาใหม่ ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนนั้นเป็นสภาวะ[ชา]"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "ヘッドボルト",
			'zh-tw': "伏特頭擊",
			th: "เฮดโบลท์"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card