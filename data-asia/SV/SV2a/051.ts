import { Card } from "../../../interfaces";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ダグトリオ",
		'zh-tw': "三地鼠",
		th: "ดักทริโอ",
		id: "Dugtrio",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "３つの 頭が 互い違いに 動くのは まわりの 土を 柔らかくして 掘りやすくするため。",
		'zh-tw': "三顆頭會輪流活動，是為了讓周圍的土 變得更鬆更好挖。",
		th: "ทั้ง 3 หัวจะสลับกันเคลื่อนไหวเพื่อให้ดินรอบ ๆ นิ่มลงและขุดง่ายขึ้น",
		id: "Tiga kepala Dugtrio saling bergerak ke arah yang berbeda-beda untuk melunakkan tanah di sekitarnya agar menjadi lebih mudah untuk digali.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "とびだしヘッド",
				'zh-tw': "魯莽頭擊",
				th: "กระโดดโหม่ง",
				id: "Sundulan Meloncat",
			},
			damage: 40,
			cost: ["Fighting"],
		},
		{
			name: {
				ja: "どろばくだん",
				'zh-tw': "泥巴炸彈",
				th: "ระเบิดโคลน",
				id: "Bom Lumpur",
			},
			damage: 80,
			cost: ["Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719493,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837319,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837320,
			},
		},
	],

	evolveFrom: {
		ja: "ディグダ",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [51],
};

export default card;
