import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニダンギル",
		'zh-tw': "雙劍鞘",
		th: "นิดังกิล"
	},

	illustrator: "Bun Toujo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [680],
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "２本の 剣は 攻撃と 防御が 目まぐるしく 入れ替わる 戦法で 獲物を しとめる。",
		'zh-tw': "２把劍會用令人眼花繚亂的速度不斷交替攻擊和防禦， 藉以制服獵物。",
		th: "ดาบทั้งสองเล่มปราบเหยื่อลงได้ด้วยกลยุทธ์ในการต่อสู้แบบเปลี่ยนกันรุกและรับอย่างรวดเร็ว"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "きりさく",
			'zh-tw': "劈開",
			th: "ฟันแหลก"
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			ja: "スラッシュダウン",
			'zh-tw': "猛擊在地",
			th: "สแลชดาวน์"
		},

		damage: 80,

		effect: {
			ja: "次の自分の番、このポケモンは「スラッシュダウン」が使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「猛擊在地」。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [สแลชดาวน์] ไม่ได้"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card