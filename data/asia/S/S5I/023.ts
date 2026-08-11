import { Card } from "models/database/card";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブーピッグ",
		'zh-tw': "噗噗豬",
		'th-th': "บูพิก",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'ja-jp': "黒真珠で サイコパワーを 増幅させる。 不思議な ステップで 相手の 心を 操る。",
		'zh-tw': "能用黑珍珠增強自己的精神力量。會用奇異的舞步操縱對手的心。",
		'th-th': "ขยายพลังจิตให้ใหญ่ขึ้นด้วยไข่มุกดำ ควบคุมจิตของฝ่ายตรงข้ามด้วยสเต็ปการเต้นแปลก ๆ",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "げんわくダンス",
				'zh-tw': "眩目舞",
				'th-th': "ระบำพิศวง",
			},
			damage: 30,
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
				'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ [สับสน]",
			},
		},
		{
			name: {
				'ja-jp': "パワージェム",
				'zh-tw': "力量寶石",
				'th-th': "พาวเวอร์เจม",
			},
			damage: 120,
			cost: ["Psychic", "Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533337,
				tcgplayer: 568972,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "バネブー",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Common",
	dexId: [326],
};

export default card;
