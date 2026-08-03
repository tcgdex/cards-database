import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "大口の沼",
		'zh-tw': "大嘴沼澤",
		th: "หนองน้ำปากกว้าง",
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、それぞれ、手札からたねポケモンをベンチに出すたび、そのポケモンにダメカンを2個のせる。",
		'zh-tw': "雙方玩家每次從手牌將【基礎】寶可夢放置於備戰區時，在那隻寶可夢身上放置2個傷害指示物。",
		th: "ทุกครั้งที่ผู้เล่นทั้งสองฝ่ายแต่ละคนนำโปเกมอน[พื้นฐาน]จากบนมือวางบนเบนช์ ให้วางตัวนับแดเมจ 2 ตัวบนโปเกมอนนั้น",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687728,
				tcgplayer: 571704,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577519,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "F",
	rarity: "None",
};

export default card;
