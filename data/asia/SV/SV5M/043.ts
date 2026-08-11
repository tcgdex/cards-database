import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "フォレトス",
		'zh-tw': "佛烈托斯",
		th: "ฟอเรทอส",
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "鋼鉄のように 硬い 殻で 全身を 覆っている。 中の 正体は 不明。",
		'zh-tw': "全身覆蓋著有如鋼鐵般堅硬的殼。 殼裡的真面目至今不明。",
		th: "เปลือกที่แข็งราวเหล็กปกคลุมรอบตัว ตัวตนภายใต้เปลือกเป็นอย่างไรไม่มีใครรู้",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "とげキャノン",
				'zh-tw': "尖刺加農炮",
				th: "ปืนใหญ่หนาม",
			},
			damage: "30×",
			cost: ["Metal"],
			effect: {
				ja: "コインを3回投げ、オモテの数×30ダメージ。",
				'zh-tw': "擲3次硬幣，造成正面出現的次數×30點傷害。",
				th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x30",
			},
		},
		{
			name: {
				ja: "こうてつタックル",
				'zh-tw': "鋼鐵衝撞",
				th: "กระแทกพลังเหล็ก",
			},
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも40ダメージ。",
				'zh-tw': "這隻寶可夢也受到40點傷害。",
				th: "โปเกมอนนี้ก็จะได้รับแดเมจ 40 ด้วย",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752927,
				tcgplayer: 566194,
			},
		},
	],

	evolveFrom: {
		ja: "クヌギダマ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [205],
};

export default card;
