import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "タンドン",
		'zh-tw': "小炭仔",
		th: "ทันด้ง",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "岩だらけの 悪路を ものともせず 一輪車のように 走りまわる。 石炭を 燃やして 生きている。",
		'zh-tw': "在滿是岩石的崎嶇路面上也能像獨輪車那樣自在移動。靠燃燒煤炭維持生命。",
		th: "วิ่งไปมาเหมือนจักรยานล้อเดียวตามทางขรุขระที่มีแต่โขดหินได้อย่างไม่มีปัญหา มีชีวิตอยู่ได้ด้วยการเผาถ่านหิน",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "とつげき",
				'zh-tw': "突擊",
				th: "ประจัญบาน",
			},
			damage: 30,
			cost: ["Fighting"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
				'zh-tw': "這隻寶可夢也受到10點傷害。",
				th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 10 ด้วย",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533382,
				tcgplayer: 568981,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [837],
};

export default card;
