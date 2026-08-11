import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ダメージポンプ",
		'zh-tw': "傷害水泵",
		th: "แดเมจปั๊มพ์",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "自分の場のポケモン1匹にのっているダメカンを2個まで選び、自分の別のポケモンに好きなようにのせ替える。",
		'zh-tw': "選擇最多2個自己的1隻場上寶可夢身上放置的傷害指示物，以任意方式改放於自己的其他寶可夢身上。",
		th: "เลือกตัวนับแดเมจที่วางอยู่บนโปเกมอนบนกระดานฝ่ายเรา 1 ตัวได้สูงสุด 2 ตัว ย้ายไปวางที่โปเกมอนตัวอื่นของฝ่ายเราตามชอบ",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687698,
				tcgplayer: 571674,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577494,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "None",
};

export default card;
