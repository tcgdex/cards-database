import { Card } from "models/database/card";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ピッピ",
		'zh-tw': "皮皮",
		'th-th': "ปิปปี",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "満月の 晩に 集まって 仲間と ダンス。 その周囲は 異常な 磁場に 包まれる。",
		'zh-tw': "在月圓之夜聚集， 和夥伴一起跳舞。 周圍被異常的磁場包圍著。",
		'th-th': "ออกมารวมตัวและเต้นกับพวกพ้องในค่ำคืนที่พระจันทร์เต็มดวง บริเวณโดยรอบนั้นจะถูกห้อมล้อมด้วยสนามแม่เหล็กที่ผิดธรรมชาติ",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "ムーンキック",
				'zh-tw': "月亮踢",
				'th-th': "มูนคิก",
			},
			damage: 40,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767138,
				tcgplayer: 568035,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [35],
};

export default card;
