import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ウォロ",
		'zh-tw': "望羅",
	},

	illustrator: "Souichirou Gunjima",
	category: "Trainer",

	effect: {
		ja: "自分のベンチの「ポケモンV」を1匹選び、そのポケモンと、ついているすべてのカードを、トラッシュする。",
		'zh-tw': "選擇1隻自己的備戰區的「寶可夢【V】」，將那隻寶可夢與附加的卡全部丟棄。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687807,
				tcgplayer: 571783,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Ultra Rare",
};

export default card;
