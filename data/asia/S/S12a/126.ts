import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アルセウスV",
		'zh-tw': "阿爾宙斯V",
		'th-th': "อาร์เซอุสV",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "トリニティチャージ",
				'zh-tw': "三重蓄能",
				'th-th': "ทรินิตี้ชาร์จ",
			},
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の山札から基本エネルギーを3枚まで選び、自分の「ポケモンV」に好きなようにつける。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多3張基本能量卡，以任意方式附於自己的「寶可夢【V】」身上。並且重洗牌庫。",
				'th-th': "เลือกการ์ดพลังงานพื้นฐานได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ติดที่ [โปเกมอน【V】] ฝ่ายเราตามชอบ แล้วสับสำรับการ์ด",
			},
		},
		{
			name: {
				'ja-jp': "パワーエッジ",
				'zh-tw': "力量刀鋒",
				'th-th': "พาวเวอร์เอดจ์",
			},
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687688,
				tcgplayer: 571664,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [493],
};

export default card;
