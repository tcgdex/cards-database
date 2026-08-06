import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ツールスクラッパー",
		'zh-tw': "道具拆除器",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "おたがいの場のポケモンについている「ポケモンのどうぐ」を2枚まで選び、トラッシュする。",
		'zh-tw': "選擇最多2張雙方的場上寶可夢身上附加的「寶可夢道具」卡，將其丟棄。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586654,
				tcgplayer: 571391,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578419,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "D",
	rarity: "None",
};

export default card;
