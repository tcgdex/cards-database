import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "チラチーノ",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "白い 体毛は 肌触りが 抜群。 ほこりや 静電気を まったく 寄せつけないのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "すごいおねだり" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにある好きなカードを2枚選び、相手に見せてから、手札に加えて良いかを相手にたずねる。相手が良いなら、選んだカードを手札に加える。良くないなら、選んだカードをトラッシュにもどし、相手のバトルポケモンに80ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560355,
			},
		},
	],

	evolveFrom: {
		ja: "チラーミィ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [573],
};

export default card;
