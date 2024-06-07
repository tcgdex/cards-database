import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "フリージオ",
		'zh-tw': "幾何雪花",
		th: "ฟรีจิโอ"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [615],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "寒い 季節に 現れる。 雪山で 亡くなった ポケモンや 人の 生まれ変わりと 言われる。",
		'zh-tw': "會出現在寒冷的季節。據說牠是在雪山死去的寶可夢或人類轉生而來的。",
		th: "จะปรากฏตัวในฤดูที่หนาวเย็น เชื่อกันว่าเป็นคนหรือโปเกมอนที่ตายท่ามกลางภูเขาหิมะกลับมาเกิด"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ファーストフリーズ",
			'zh-tw': "快速凍凝",
			th: "เฟิสต์ฟรีซ"
		},

		damage: 30,

		effect: {
			ja: "後攻プレイヤーの最初の番なら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "若在後攻玩家的最初回合，則將對手的戰鬥寶可夢【麻痺】。",
			th: "ถ้าเป็นเทิร์นแรกสุดของผู้เล่นฝ่ายเล่นทีหลัง จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card