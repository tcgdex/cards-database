import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ボクレー",
		'zh-tw': "小木靈",
		th: "โบคุเร"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Katsunori Sato",
	dexId: [708],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "死んだ 子供の 魂が 切り株に 宿った ポケモン。 森を さまよい 仲間を 探す。",
		'zh-tw': "死去的孩子的靈魂附在 樹樁上，變成了寶可夢。 會徘徊在森林裡尋找夥伴。",
		th: "โปเกมอนที่เกิดจากการที่วิญญาณเด็กที่เสียชีวิตมาสิงสู่อยู่ในตอไม้ ร่อนเร่ในป่าเพื่อตามหาเพื่อนพ้อง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "やどりぎのタネ",
			'zh-tw': "寄生種子",
			th: "เมล็ดกาฝาก"
		},

		damage: 20,

		effect: {
			ja: "このポケモンのHPを「20」回復する。",
			'zh-tw': "將這隻寶可夢恢復「20」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [20]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card