import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ ヌメイル",
		'zh-tw': "洗翠 黏美兒",
		th: "ฮิซุย นูเมล",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "陰気な 性質。 ヒスイの地の 水に 含有する 鉄が 皮膚の粘液に 作用し 金属の殻へ 変容させたと 考察す。",
		'zh-tw': "性情陰沉。據考察，洗翠地區的水中 含有的鐵質對皮膚的黏液產生作用， 使其變化成了金屬外殼。",
		th: "มีนิสัยมืดมน จากการศึกษาพบว่า เหล็กในภูมิภาคฮิซุยที่มีน้ำปนอยู่จะทำปฏิกิริยากับเยื่อเมือกตามผิวหนัง และทำให้เปลี่ยนรูปกลายเป็นเปลือกโลหะ",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "こうちょく",
				'zh-tw': "硬化",
				th: "แข็งเกร็ง",
			},
			cost: [],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-50」點。",
				th: "เทิร์นถัดไปของฝ่ายตรงข้าม แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับ จะถูก [-50]",
			},
		},
		{
			name: {
				ja: "ひっぱたく",
				'zh-tw': "重摑",
				th: "ตบแรง",
			},
			damage: 40,
			cost: ["Water", "Metal"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687675,
				tcgplayer: 571651,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577485,
			},
		},
	],

	evolveFrom: {
		ja: "ヌメラ",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "None",
	dexId: [705],
};

export default card;
