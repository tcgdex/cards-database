import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "ダンサー",
		'zh-tw': "舞者",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。後攻プレイヤーの最初の番に使ったなら、さらに3枚引く。",
		'zh-tw': "從自己的牌庫抽出2張卡。若在後攻玩家的最初回合使用，則再抽出3張卡。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575652,
				tcgplayer: 569598,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
