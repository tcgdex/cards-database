import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ユキワラシ",
		'zh-tw': "雪童子",
		th: "ยูกิวาราชิ"
	},

	illustrator: "satoma",
	rarity: "Common",
	category: "Pokemon",
	dexId: [361],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "大きな 葉っぱの 下に 数匹の ユキワラシが 集まり 仲良く 暮らしているという。",
		'zh-tw': "據說，好幾隻雪童子會聚集在大大的樹葉底下， 融洽地生活在一起。",
		th: "ว่ากันว่าใต้ใบไม้ใหญ่จะมียูกิวาราชิจำนวนหนึ่งอาศัยอยู่ด้วยกันอย่างสนิทสนม"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "こおりのつぶて",
			'zh-tw': "冰礫",
			th: "สะเก็ดน้ำแข็ง"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンがポケモンなら、30ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為【鬥】寶可夢，則增加30點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นโปเกมอน[ต่อสู้] การโจมตีนี้จะเพิ่มแดเมจอีก 30"
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