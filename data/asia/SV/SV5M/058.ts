import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハトーボー",
		'zh-tw': "咕咕鴿",
		'th-th': "ฮาโทโบ",
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'ja-jp': "空を飛ぶ 速さは そこそこ。 どんな 遠く 離れても 主と 自分の 巣を 憶えている。",
		'zh-tw': "飛行速度不可小覷。無論飛到多遠的地方， 都會記得自己的主人和巢。",
		'th-th': "ความเร็วในการบินบนฟ้าจัดว่าดี แม้จะห่างไปไกลแค่ไหนก็ยังจำเจ้าของและรังของตัวเองได้",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "スピードひこう",
				'zh-tw': "高速飛行",
				'th-th': "บินเร็วจี๋",
			},
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "ジェットウイング",
				'zh-tw': "噴射之翼",
				'th-th': "เจ็ตวิง",
			},
			damage: 70,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
				'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752942,
				tcgplayer: 566209,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マメパト",
	},

	retreat: 0,
	regulationMark: "H",
	rarity: "Common",
	dexId: [520],
};

export default card;
