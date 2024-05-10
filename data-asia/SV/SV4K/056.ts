import { Card } from "../../../interfaces"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ドゴーム",
		'zh-tw': "吼爆彈",
		th: "โดกอม"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	dexId: [294],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "大声は 聴覚だけでなく 空気の 圧力となり 敵を 吹きとばし ダメージを 与える。",
		'zh-tw': "巨大的叫聲不只會傷害聽覺，還會壓縮空氣造成衝擊波 將對手震飛造成傷害。",
		th: "เสียงร้องดังลั่นนั้นไม่ใช่แค่เสียงดังอย่างเดียว แต่ยังกลายเป็นแรงดันอากาศที่สามารถพัดคู่ต่อสู้ให้ปลิวและสร้างความเสียหายได้"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "のしかかり",
			'zh-tw': "泰山壓頂",
			th: "ทิ้งตัวทับ"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "メガインパクト",
			'zh-tw': "超級衝擊",
			th: "เมก้าอิมแพกต์"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card