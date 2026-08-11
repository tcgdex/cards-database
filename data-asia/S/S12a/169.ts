import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "シンオウ神殿",
		'zh-tw': "神奧神殿",
		th: "วิหารชินโอ",
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		ja: "おたがいの場のポケモンについている特殊エネルギーの効果はすべてなくなり、[C]エネルギー1個ぶんとしてはたらく。",
		'zh-tw': "雙方的場上寶可夢身上附加的特殊能量的效果全部消除，視為提供1個【無】能量。",
		th: "เอฟเฟกต์ของพลังงานพิเศษที่ติดอยู่กับโปเกมอนบนกระดานของทั้งสองฝ่ายทั้งหมดจะหายไปและทำงานเทียบเท่าพลังงาน[ไร้สี]1 ลูก",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687731,
				tcgplayer: 571707,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577522,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "F",
	rarity: "None",
};

export default card;
