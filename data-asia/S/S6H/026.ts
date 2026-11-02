import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "クレベース",
		'zh-tw': "冰岩怪",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		ja: "日中の 活動で 体の 亀裂は 深くなるが 一晩で 亀裂の ない 体に もどる。",
		'zh-tw': "雖然身體的裂縫會因白天的活動而變大，但只要一晚就能全部長好。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "フロストバリア",
				'zh-tw': "氣象之力",
			},
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
				'zh-tw': "從牌庫抽卡直到自己的手牌滿6張為止。",
			},
		},
		{
			name: { ja: "ぶちかます" },
			damage: 140,
			cost: ["Water", "Water", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560442,
				tcgplayer: 569158,
			},
		},
	],

	evolveFrom: {
		ja: "カチコール",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Common",
	dexId: [713],
};

export default card;
