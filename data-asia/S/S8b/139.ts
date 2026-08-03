import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ふつうのつりざお",
		'zh-tw': "普通釣竿",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュからポケモンを2枚までと、基本エネルギーを2枚まで選び、相手に見せて、山札にもどして切る。（ポケモンまたは基本エネルギーのどちらかだけでもよい。）",
		'zh-tw': "從自己的棄牌區選擇最多2張寶可夢卡與最多2張基本能量卡，在給對手看過後放回牌庫並重洗。（可只選擇寶可夢卡或者只選擇基本能量卡。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586655,
				tcgplayer: 571392,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578420,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "D",
	rarity: "None",
};

export default card;
