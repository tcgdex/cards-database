import { Card } from "models/database/card";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドラパルトex",
		'zh-tw': "多龍巴魯托ex",
		'th-th': "โดราพัลท์ex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],

	stage: "Stage2",

	attacks: [
		{
			name: {
				'ja-jp': "ジェットヘッド",
				'zh-tw': "噴射頭擊",
				'th-th': "เจ็ตเฮด",
			},
			damage: 70,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "ファントムダイブ",
				'zh-tw': "幻影奇襲",
				'th-th': "แฟนธอมไดฟ์",
			},
			damage: 200,
			cost: ["Fire", "Psychic"],
			effect: {
				'ja-jp': "ダメカン6個を、相手のベンチポケモンに好きなようにのせる。",
				'zh-tw': "將6個傷害指示物以任意方式放置於對手的備戰寶可夢身上。",
				'th-th': "วางตัวนับแดเมจ 6 ตัว บนโปเกมอนบนเบนช์ฝ่ายตรงข้ามตามชอบ",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767174,
				tcgplayer: 568071,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ドロンチ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [887],

	suffix: "EX",
};

export default card;
