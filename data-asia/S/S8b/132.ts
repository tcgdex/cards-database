import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "おむかえちょうちん",
		'zh-tw': "渡魂燈籠",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから「いちげき」のサポートを1枚選び、相手に見せて、手札に加える。",
		'zh-tw': "從自己的棄牌區選擇1張「一擊」支援者卡，在給對手看過後加入手牌。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586648,
				tcgplayer: 571385,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578413,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "None",
};

export default card;
