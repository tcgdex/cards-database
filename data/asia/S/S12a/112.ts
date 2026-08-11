import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヌメラ",
		'zh-tw': "黏黏寶",
		'th-th': "นูเมรา",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		'ja-jp': "湿度 高き 木陰に 身を 潜める。 体表を覆う ぬめりとした 液体が 乾くと たちどころに 生気を 失う。",
		'zh-tw': "藏身在濕度較高的樹蔭下。 覆蓋著身體的黏糊液體一旦 乾枯，就會立刻失去生命力。",
		'th-th': "ซ่อนตัวอยู่ในเงาไม้ที่มีความชื้นสูง หากเมือกเหลวลื่น ๆ ที่ห่อหุ้มภายนอกร่างกายแห้งผาก ก็จะสิ้นลมไปในทันที",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "たいあたり",
				'zh-tw': "撞擊",
				'th-th': "พุ่งเข้าชน",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				'ja-jp': "とかす",
				'zh-tw': "溶解",
				'th-th': "หลอมละลาย",
			},
			damage: 30,
			cost: ["Water", "Metal"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687674,
				tcgplayer: 571650,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577484,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "None",
	dexId: [704],
};

export default card;
