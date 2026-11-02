import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "オーロット",
		'zh-tw': "朽木妖",
		th: "โอร็อต",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "森に 棲む ポケモンには とても 優しい。 頭の しげみを 棲み処にされても 気にしない。",
		'zh-tw': "對住在森林裡的寶可夢 非常親切，就算被住進了 頭上那叢葉子裡也毫不在意。",
		th: "อ่อนโยนต่อเหล่าโปเกมอนที่อาศัยอยู่ในป่าเป็นอย่างมาก แม้พุ่มไม้บนหัวจะถูกเอาไปทำเป็นที่อยู่อาศัยก็ไม่สนใจ",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ギガドレイン",
				'zh-tw': "終極吸取",
				th: "กิก้าเดรน",
			},
			damage: 50,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンに与えたダメージぶん、このポケモンのHPを回復する。",
				'zh-tw': "將這隻寶可夢恢復對對手的戰鬥寶可夢造成的傷害相同數值的HP。",
				th: "ฟื้นฟู HP ของโปเกมอนนี้ ตามจำนวนแดเมจที่ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม",
			},
		},
		{
			name: {
				ja: "フォレストダンプ",
				'zh-tw': "森林拋擲",
				th: "ฟอเรสต์ดัมป์",
			},
			damage: 130,
			cost: ["Grass", "Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 766975,
				tcgplayer: 567997,
			},
		},
	],

	evolveFrom: {
		ja: "ボクレー",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [709],
};

export default card;
