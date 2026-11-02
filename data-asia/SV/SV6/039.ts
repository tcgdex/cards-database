import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "コリンク",
		'zh-tw': "小貓怪",
		th: "โคลิงก์",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "筋肉が 伸び縮み することで 電気が 発生。 ピンチになると 体毛が まぶしく 光る。",
		'zh-tw': "只要伸縮肌肉就能夠 產生電流。身陷危機時 體毛會發出刺眼的亮光。",
		th: "สร้างไฟฟ้าโดยการยืดและหดตัวของกล้ามเนื้อ พอเข้าตาจน ขนทั่วตัวจะเปล่งแสงแสบตา",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "こうきしん",
				'zh-tw': "好奇心",
				th: "อยากรู้อยากเห็น",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手の手札を見る。",
				'zh-tw': "查看對手的手牌。",
				th: "ดูการ์ดบนมือฝ่ายตรงข้าม",
			},
		},
		{
			name: {
				ja: "バチバチ",
				'zh-tw': "劈哩啪啦",
				th: "ประกายไฟ",
			},
			damage: 30,
			cost: ["Lightning", "Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767132,
				tcgplayer: 568029,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [403],
};

export default card;
