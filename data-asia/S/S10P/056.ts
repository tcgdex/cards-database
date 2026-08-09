import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "リングマ",
		'zh-tw': "圈圈熊",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "ヒスイの地を 寒気 覆いたる 季節 好物の木の実 集めに 野山を徘徊す。 空腹ゆえ 気が立ち 極めて凶暴。",
		'zh-tw': "在洗翠大地被嚴寒籠罩的季節裡，徘徊於山野之中尋找愛吃的樹果。 空腹帶來的焦躁使牠變得極為凶暴。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "れんぞくはりて",
				'zh-tw': "連續巴掌",
			},
			damage: "40×",
			cost: ["Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×40ダメージ。",
				'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×40點傷害。",
			},
		},
		{
			name: {
				ja: "かいりき",
				'zh-tw': "怪力",
			},
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651115,
				tcgplayer: 569899,
			},
		},
	],

	evolveFrom: {
		ja: "ヒメグマ",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [217],
};

export default card;
