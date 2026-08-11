import { Card } from "models/database/card";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スワンナ",
		'zh-tw': "舞天鵝",
		'th-th': "สวอนนา",
	},

	illustrator: "Susumu Maeya",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'ja-jp': "薄明の中で 踊る 美しい ダンスから 多くの 芸術家が インスピレーションを 受けたという。",
		'zh-tw': "據說許多藝術家都是從牠在 晨曦暮色的微光中舞出的 優美舞蹈獲得過靈感。",
		'th-th': "ว่ากันว่าศิลปินจำนวนมากได้รับแรงบันดาลใจจากท่วงท่าการเต้นรำแสนงดงามใต้แสงสลัวยามสนธยาของมัน",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "とうしのつばさ",
				'zh-tw': "鬥志之翼",
				'th-th': "ปีกนักสู้",
			},
			damage: "20+",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが「ポケモンex・V」なら、90ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加90點傷害。",
				'th-th': "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【ex】 /【V】] การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			},
		},
		{
			name: {
				'ja-jp': "かぜおこし",
				'zh-tw': "起風",
				'th-th': "เรียกลม",
			},
			damage: 70,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767182,
				tcgplayer: 568079,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コアルヒー",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [581],
};

export default card;
