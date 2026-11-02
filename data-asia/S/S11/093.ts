import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ロストスイーパー",
		'zh-tw': "放逐吸塵器",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を1枚、ロストゾーンに置かなければ使えない。おたがいの場のポケモンについている「ポケモンのどうぐ」と場に出ている「スタジアム」の中から1枚選び、ロストゾーンに置く。",
		'zh-tw': "這張卡必須將自己的1張手牌放置於放逐區才可使用。從雙方的場上寶可夢身上附加的「寶可夢道具」卡與場上的「競技場」卡中選擇1張，放置於放逐區。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667968,
				tcgplayer: 570024,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
