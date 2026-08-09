import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "モミ",
		'zh-tw': "芽米",
		th: "โมมิ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の進化ポケモン全員のHPを、すべて回復する。その後、回復したポケモンについているエネルギーを、すべてトラッシュする。",
		'zh-tw': "將自己的所有進化寶可夢的HP全部恢復。然後，將恢復的寶可夢身上附加的能量全部丟棄。",
		th: "ฟื้นฟู HP ทั้งหมดของโปเกมอนวิวัฒนาการฝ่ายเราทุกตัว จากนั้น ทิ้งพลังงานทั้งหมดที่ติดที่โปเกมอนที่ถูกฟื้นฟูที่ตำแหน่งทิ้งการ์ด",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687725,
				tcgplayer: 571701,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577516,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "None",
};

export default card;
