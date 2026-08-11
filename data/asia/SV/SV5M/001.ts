import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ストライク",
		'zh-tw': "飛天螳螂",
		'th-th': "สไตรค์",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'ja-jp': "両手の 鋭い カマは 硬いものを 切れば切るほど さらに 切れ味を 増していく。",
		'zh-tw': "雙手的鐮刀鋒利無比，砍斷越多堅硬的東西， 其鋒利程度也會隨之提升。",
		'th-th': "ยิ่งใช้เคียวคมที่แขนทั้งสองตัดของแข็งมากเท่าไหร่ เคียวก็จะยิ่งคมมากขึ้นเท่านั้น",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "きる",
				'zh-tw': "切",
				'th-th': "ตัดฉับ",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "スラッシュダウン",
				'zh-tw': "猛擊在地",
				'th-th': "สแลชดาวน์",
			},
			damage: 60,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンは「スラッシュダウン」が使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「猛擊在地」。",
				'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [สแลชดาวน์] ไม่ได้",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752882,
				tcgplayer: 566152,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [123],
};

export default card;
