import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ウォロ",
		'zh-tw': "望羅",
	},

	illustrator: "kirisAki",
	category: "Trainer",

	effect: {
		ja: "自分のベンチの「ポケモンV」を1匹選び、そのポケモンと、ついているすべてのカードを、トラッシュする。",
		'zh-tw': "選擇1隻自己的備戰區的「寶可夢【V】」，將那隻寶可夢與附加的卡全部丟棄。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656391,
				tcgplayer: 570730,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Rare",
};

export default card;
