import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "オニスズメ",
		'zh-tw': "烈雀",
		th: "โอนิสึซึเมะ",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "羽が 短く 長い 距離を 飛べない。 せわしなく 動き まわって むしポケモンを ついばむ。",
		'zh-tw': "翅膀很短，無法長距離飛行。總是不停地四處跳來跳去，忙著啄食蟲寶可夢。",
		th: "ด้วยปีกที่สั้นทำให้บินได้ไม่ไกล มักขยับไปมาอย่างลุกลี้ลุกลนจิกกินโปเกมอนแมลง",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "つつく",
				'zh-tw': "啄",
				th: "จิก",
			},
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533497,
				tcgplayer: 569004,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [21],
};

export default card;
