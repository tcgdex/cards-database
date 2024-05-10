import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "パモ",
		'zh-tw': "布撥",
		th: "พาโม",
		id: "Pawmi"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [921],
	hp: 50,
	types: ["Lightning"],

	description: {
		ja: "手の 肉球が 放電器官。 後ろ脚で ようやく 立ち上がると 手のひらから 電撃を 放つ。",
		'zh-tw': "手的肉球是放電的器官。會費勁地用後腳站起來， 然後從手掌釋放出電擊。",
		th: "อุ้งมือคืออวัยวะปล่อยกระแสไฟฟ้า หลังจากที่ลุกขึ้นยืนด้วยขาหลังอย่างทุลักทุเลก็จะปล่อยไฟฟ้าออกมาจากอุ้งมือ",
		id: "Bantalan tangannya adalah organ pelepasan listrik. Setelah berhasil berdiri dengan kaki belakangnya, Pawmi melepaskan serangan listrik dari telapak tangannya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "プチショック",
			'zh-tw': "小衝擊",
			th: "ช็อคเล็ก ๆ",
			id: "Sengatan Mini"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card