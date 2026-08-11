import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "コフーライ",
		'zh-tw': "粉蝶蛹",
		th: "โคฟูไร",
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "硬い 体は とりポケモンの クチバシでも 傷ひとつ つかない。 粉を まき散らして 防戦する。",
		'zh-tw': "堅硬的身體即使是鳥寶可夢的鳥嘴也無法傷之分毫。四處撒粉進行防守。",
		th: "ร่างกายที่แข็งทำให้จะงอยของโปเกมอนนกทำอะไรไม่ได้ จะโปรยผงออกมาป้องกันตัว",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "くさごもり",
				'zh-tw': "草藏",
				th: "ซ่อนในหญ้า",
			},
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンのHPを「40」回復する。",
				'zh-tw': "將這隻寶可夢恢復「40」HP。",
				th: "ฟื้นฟู HP ของโปเกมอนนี้ [40]",
			},
		},
		{
			name: {
				ja: "むしくい",
				'zh-tw': "蟲咬",
				th: "แมลงกัด",
			},
			damage: 40,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533247,
				tcgplayer: 568953,
			},
		},
	],

	evolveFrom: {
		ja: "コフキムシ",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Common",
	dexId: [665],
};

export default card;
