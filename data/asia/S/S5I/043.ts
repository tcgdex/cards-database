import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドンカラス",
		'zh-tw': "烏鴉頭頭",
		'th-th': "ดอนคาราซึ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'ja-jp': "敵と 戦うのは ほぼ 子分。 自分の 手を 汚すのは 相手に 最後の 止めを 刺すときだけ。",
		'zh-tw': "與敵人的戰鬥幾乎全由手下來應付。只有在最後給對手致命一擊的時候，才會弄髒自己的手。",
		'th-th': "ส่วนใหญ่ที่ต่อสู้กับศัตรูคือลูกน้อง จะทำให้มือตัวเองแปดเปื้อนเฉพาะตอนปลิดลมหายใจสุดท้ายของคู่ต่อสู้เท่านั้น",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ふみん",
				'zh-tw': "不眠",
				'th-th': "นอนไม่หลับ",
			},
			effect: {
				'ja-jp': "このポケモンはねむりにならない。",
				'th-th': "โปเกมอนนี้จะไม่เป็นสภาวะ [หลับ]",
				'zh-tw': "這隻寶可夢不會【睡眠】。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "ボルテージダイブ",
				'zh-tw': "怒氣俯衝",
				'th-th': "โวลเทจไดฟ์",
			},
			damage: "80+",
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンに特殊エネルギーがついているなら、80ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢身上附有特殊能量，則增加80點傷害。",
				'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามมีพลังงานพิเศษติดอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 80",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533437,
				tcgplayer: 568992,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヤミカラス",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [430],
};

export default card;
