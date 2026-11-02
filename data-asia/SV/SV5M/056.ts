import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "エネコロロ",
		'zh-tw': "優雅貓",
		th: "เอเนโคโรโระ",
	},

	illustrator: "Keisin",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "汚い 場所が 大嫌い。 居心地の 良い 場所で いつも 毛並みを 手入れしている。",
		'zh-tw': "最討厭骯髒的地方。總是待在舒適的地方 打理自己的毛髮。",
		th: "เกลียดสถานที่ที่สกปรกมาก จะเลียแต่งขนในสถานที่ที่น่าอยู่และสบายเสมอ",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "しっぽでまどわす",
				'zh-tw': "擺尾蠱惑",
				th: "หางสั่งมึน",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
				th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			},
		},
		{
			name: {
				ja: "エナジーミキサー",
				'zh-tw': "能量攪拌",
				th: "เอนเนอร์จี้มิกเซอร์",
			},
			damage: 110,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分の場のポケモンについているエネルギーを好きなだけ選び、自分のポケモンに好きなようにつけ替える。",
				'zh-tw': "選擇自己的場上寶可夢身上附加的任意數量的能量卡，以任意方式改附於自己的寶可夢身上。",
				th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราตามจำนวนที่ชอบ ย้ายไปติดกับโปเกมอนฝ่ายเราตามชอบ",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752940,
				tcgplayer: 566207,
			},
		},
	],

	evolveFrom: {
		ja: "エネコ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [301],
};

export default card;
