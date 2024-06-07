import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ニダンギル",
		'zh-tw': "雙劍鞘",
		th: "นิดังกิล"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [680],
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "２本の 剣は 攻撃と 防御が 目まぐるしく 入れ替わる 戦法で 獲物を しとめる。",
		'zh-tw': "２把劍會用令人眼花繚亂的速度不斷交替攻擊和防禦，藉以制服獵物。",
		th: "ดาบทั้งสองเล่มปราบเหยื่อลงได้ด้วยกลยุทธ์ในการต่อสู้แบบเปลี่ยนกันรุกและรับอย่างรวดเร็ว"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "つるぎのまい",
			'zh-tw': "劍舞",
			th: "ระบำดาบ"
		},

		effect: {
			ja: "次の自分の番、このポケモンの「スライスブレード」のダメージは「+80」される。",
			'zh-tw': "在下個自己的回合，這隻寶可夢「利刃切割」的傷害「+80」點。",
			th: "เทิร์นถัดไปของฝ่ายเรา แดเมจจาก [สไลซ์เบลด] ของโปเกมอนนี้จะถูก [+80]"
		}
	}, {
		cost: ["Metal", "Metal"],

		name: {
			ja: "スライスブレード",
			'zh-tw': "利刃切割",
			th: "สไลซ์เบลด"
		},

		damage: 40
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