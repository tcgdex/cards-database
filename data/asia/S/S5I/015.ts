import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "エレブー",
		'zh-tw': "電擊獸",
		th: "เอเลบู",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "停電が 起こる 原因に されることが 多いが 実は 会社の ミスの ほうが多い。",
		'zh-tw': "人們經常把停電的原因歸咎到牠們身上，但其實大多是電力公司的過失。",
		th: "มักถูกมองว่าเป็นต้นเหตุของการเกิดไฟดับอยู่บ่อย ๆ แต่ความจริงแล้วส่วนใหญ่เป็นเพราะความผิดพลาดของบริษัทไฟฟ้า",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "おおぶりパンチ",
				'zh-tw': "揮大拳",
				th: "หมัดหนัก",
			},
			damage: 30,
			cost: ["Lightning"],
			effect: {
				ja: "次の自分の番、このポケモンは「おおぶりパンチ」が使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「揮大拳」。",
				th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [หมัดหนัก] ไม่ได้",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533297,
				tcgplayer: 568963,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [125],
};

export default card;
