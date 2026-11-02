import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ニドリーナ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "メスなので 性格は 温厚。 口から 出す 超音波は 相手を まどわす 力がある。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ファミリーレスキュー" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにある[超]ポケモンを5枚、相手に見せてから、山札にもどして切る。",
			},
		},
		{
			name: { ja: "かみつく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558334,
			},
		},
	],

	evolveFrom: {
		ja: "ニドラン♀",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [30],
};

export default card;
