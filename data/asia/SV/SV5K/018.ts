import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ケルディオ",
		'zh-tw': "凱路迪歐",
		'th-th': "เคลดิโอ",
		'ko-kr': "케르디오",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'ja-jp': "戦う 覚悟を 決めたことで 全身に 気力が みなぎり ケルディオの 姿を 変えた。",
		'zh-tw': "透過下定戰鬥的決心讓自己全身充滿力量， 並改變了自己的樣子。",
		'th-th': "เมื่อตัดสินใจอย่างแน่วแน่ที่จะต่อสู้ พลังจะเอ่อขึ้นทั่วกายและร่างของเคลดิโอจะเปลี่ยนไป",
		'ko-kr': "싸울 각오를 다지고 난 후 전신에 기력이 넘쳐흘러 케르디오의 모습이 바뀌었다.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "クイックドロー",
				'zh-tw': "快速抽出",
				'th-th': "ควิกดรอว์",
				'ko-kr': "퀵드로",
			},
			damage: 20,
			cost: ["Water"],
			effect: {
				'ja-jp': "自分の山札を2枚引く。",
				'zh-tw': "從自己的牌庫抽出2張卡。",
				'th-th': "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
				'ko-kr': "자신의 덱을 2장 뽑는다.",
			},
		},
		{
			name: {
				'ja-jp': "アクアブレード",
				'zh-tw': "水之利刃",
				'th-th': "อควาเบลด",
				'ko-kr': "아쿠아 블레이드",
			},
			damage: 110,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752777,
				tcgplayer: 568352,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [647],
};

export default card;
