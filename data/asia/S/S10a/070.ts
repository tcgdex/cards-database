import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "野盗三姉妹",
		'zh-tw': "野賊三姐妹",
	},

	illustrator: "Souichirou Gunjima",
	category: "Trainer",

	effect: {
		ja: "相手の山札を上から5枚見て、その中からグッズを好きなだけ選び、トラッシュする。残りのカードは山札にもどして切る。",
		'zh-tw': "查看對手的牌庫上方5張卡，從其中選擇任意數量的物品卡，將其丟棄。將剩餘卡放回牌庫並重洗。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656394,
				tcgplayer: 570733,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577137,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
