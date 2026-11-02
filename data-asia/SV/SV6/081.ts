import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ドラパルトex",
		'zh-tw': "多龍巴魯托ex",
		th: "โดราพัลท์ex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],

	stage: "Stage2",

	attacks: [
		{
			name: {
				ja: "ジェットヘッド",
				'zh-tw': "噴射頭擊",
				th: "เจ็ตเฮด",
			},
			damage: 70,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "ファントムダイブ",
				'zh-tw': "幻影奇襲",
				th: "แฟนธอมไดฟ์",
			},
			damage: 200,
			cost: ["Fire", "Psychic"],
			effect: {
				ja: "ダメカン6個を、相手のベンチポケモンに好きなようにのせる。",
				'zh-tw': "將6個傷害指示物以任意方式放置於對手的備戰寶可夢身上。",
				th: "วางตัวนับแดเมจ 6 ตัว บนโปเกมอนบนเบนช์ฝ่ายตรงข้ามตามชอบ",
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
		ja: "ドロンチ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [887],

	suffix: "EX",
};

export default card;
