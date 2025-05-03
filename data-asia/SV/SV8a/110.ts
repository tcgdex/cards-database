import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニダンギル",
		id: "Doublade",
		th: "นิดังกิล",
		'zh-tw': "雙劍鞘",
		'zh-cn': "雙劍鞘"
	},

	illustrator: "Bun Toujo",
	rarity: "None",
	category: "Pokemon",
	dexId: [680],
	hp: 90,
	types: ["Metal"],

	description: {
		ja: "２本の 剣は 攻撃と 防御が 目まぐるしく 入れ替わる 戦法で 獲物を しとめる。",
		id: "Doublade menggunakan strategi mengganti posisi menyerang dan bertahan kedua bilah pedang secara terus menerus untuk menghabisi mangsanya.",
		th: "ดาบทั้งสองเล่มปราบเหยื่อลงได้ด้วยกลยุทธ์ในการต่อสู้แบบเปลี่ยนกันรุกและรับอย่างรวดเร็ว",
		'zh-tw': "２把劍會用令人眼花繚亂的 速度不斷交替攻擊和防禦， 藉以制服獵物。",
		'zh-cn': "２把劍會用令人眼花繚亂的 速度不斷交替攻擊和防禦， 藉以制服獵物。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "きりさく",
			id: "Menyayat",
			th: "ฟันแหลก",
			'zh-tw': "劈開",
			'zh-cn': "劈開"
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			ja: "スラッシュダウン",
			id: "Slash Down",
			th: "สแลชดาวน์",
			'zh-tw': "猛擊在地",
			'zh-cn': "猛擊在地"
		},

		damage: 80,

		effect: {
			ja: "次の自分の番、このポケモンは「スラッシュダウン」が使えない。",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Slash Down.",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [สแลชดาวน์] ไม่ได้",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「猛擊在地」。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用「猛擊在地」。"
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