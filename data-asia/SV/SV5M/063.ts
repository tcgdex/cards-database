import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "リブートポッド",
		'zh-tw': "重新啟動箱",
		th: "รีบูตพอด",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		ja: "自分の「未来」のポケモン全員に、トラッシュから基本エネルギーを1枚ずつつける。",
		'zh-tw': "從棄牌區附給自己的所有「未來」寶可夢各1張基本能量卡。",
		th: "นำการ์ดพลังงานพื้นฐานจากตำแหน่งทิ้งการ์ดมาติดที่ โปเกมอน [อนาคต] ฝ่ายเราทุกตัว ตัวละ 1 ใบ",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752947,
				tcgplayer: 566214,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "ACE SPEC Rare",
};

export default card;
