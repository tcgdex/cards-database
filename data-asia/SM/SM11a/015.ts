import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "エンブオー",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	description: {
		ja: "アゴの 炎で こぶしを 燃やして 炎の パンチを 繰り出す。 とても 仲間思いの ポケモン。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ばくねつえんぶ" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札を上から8枚見て、その中にある基本エネルギーを好きなだけ、自分のポケモンに好きなようにつける。残りのカードは山札にもどして切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヒートブラスト" },
			damage: 160,
			cost: ["Fire", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556593,
			},
		},
	],

	evolveFrom: {
		ja: "チャオブー",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [500],
};

export default card;
