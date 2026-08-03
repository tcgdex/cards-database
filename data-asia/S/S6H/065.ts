import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "アスナ",
		'zh-tw': "亞莎",
	},

	illustrator: "Megumi Mizutani",
	category: "Trainer",

	effect: {
		ja: "相手の場のポケモンについている「特殊エネルギー」と場に出ている「スタジアム」を1枚ずつ選び、トラッシュする。",
		'zh-tw': "選擇對手的場上寶可夢身上附加的「特殊能量」卡與場上的「競技場」卡各1張，將其丟棄。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560482,
				tcgplayer: 569197,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
