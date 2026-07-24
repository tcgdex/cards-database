import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ルミタン",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札にある「ラジュルネ」「ルスワール」「ラニュイ」を1枚ずつトラッシュしなければ使えない。自分の山札を上から12枚見て、その中にあるエネルギーを好きなだけ、自分のポケモンに好きなようにつける。残りのカードは、山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551181,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "None",
};

export default card;
