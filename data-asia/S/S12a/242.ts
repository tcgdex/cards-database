import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ツツジ",
		'zh-tw': "杜娟",
	},

	illustrator: "Toshinao Aoki",
	category: "Trainer",

	effect: {
		ja: "このカードは、相手のサイドの残り枚数が3枚以下のときにしか使えない。おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、自分は6枚、相手は2枚、山札を引く。",
		'zh-tw': "這張卡只可在對手剩餘獎賞卡的張數為3張以下時使用。 雙方玩家各將手牌全部放回牌庫並重洗。然後，從牌庫抽卡，自己抽出6張，對手抽出2張。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687804,
				tcgplayer: 571780,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Special illustration rare",
};

export default card;
