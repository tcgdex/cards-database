import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨノワール",
		'zh-tw': "黑夜魔靈",
		th: "โยนัว",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		ja: "意思が あるのか わかっていない。 霊界からの 電波に 従い 人や ポケモンを 連れ去るのだ。",
		'zh-tw': "沒人知道牠是否擁有意識。會從來自靈界的電波中接受指示， 將人和寶可夢帶走。",
		th: "ไม่ปรากฏชัดเจนว่ามีความคิดหรือไม่ คอยทำตามสัญญาณที่ส่งมาจากโลกวิญญาณ และจะลักพาคนหรือโปเกมอนไป",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "スペシャルトランス",
				'zh-tw': "特殊轉移",
				th: "สเปเชียลทรานสเฟอร์",
			},
			effect: {
				ja: "自分の番に何回でも使える。自分の場のポケモンについている特殊エネルギーを1個選び、自分の別のポケモンにつけ替える。",
				'zh-tw': "在自己的回合時，可不限次數使用。選擇1個自己的場上寶可夢身上附加的特殊能量，改附於自己的其他寶可夢身上。",
				th: "ใช้กี่ครั้งก็ได้ในเทิร์นฝ่ายเรา เลือกพลังงานพิเศษที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเรา 1 ลูก ย้ายไปติดกับโปเกมอนตัวอื่นของฝ่ายเรา",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ソウルイート",
				'zh-tw': "靈魂吃食",
				th: "โซลอีต",
			},
			damage: 120,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687539,
				tcgplayer: 571597,
			},
		},
	],

	evolveFrom: {
		ja: "サマヨール",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "None",
	dexId: [477],
};

export default card;
