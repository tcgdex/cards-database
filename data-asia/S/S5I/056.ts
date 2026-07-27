import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "オニドリル",
		'zh-tw': "大嘴雀",
		th: "โอนิดริล",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "オニドリルの 縄張りで 食べ物を 持って 歩くのは 危険だ。 あっという 間に かっさらわれるぞ。",
		'zh-tw': "在大嘴雀的地盤上帶著食物走動是件危險的事，食物轉眼間就會被奪走。",
		th: "การถือของกินเดินเข้าไปในอาณาเขตของโอนิดริล เป็นเรื่องที่อันตรายอย่างยิ่ง เพราะจะถูกฉกแย่ง หายไปโดยที่ไม่ทันได้ตั้งตัว",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ドリルくちばし",
				'zh-tw': "啄鑽",
				th: "จะงอยสว่าน",
			},
			damage: 70,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533502,
				tcgplayer: 569005,
			},
		},
	],

	evolveFrom: {
		ja: "オニスズメ",
	},

	retreat: 0,
	regulationMark: "E",
	rarity: "Common",
	dexId: [22],
};

export default card;
