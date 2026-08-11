import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "活力の壺",
		'zh-tw': "活力之壺",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュから「いちげきエネルギー」を2枚まで選び、相手に見せて、山札にもどして切る。",
		'zh-tw': "從自己的棄牌區選擇最多2張「一擊能量」卡，在給對手看過後放回牌庫並重洗。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586650,
				tcgplayer: 571387,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578415,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "E",
	rarity: "None",
};

export default card;
