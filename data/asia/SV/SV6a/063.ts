import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニュートラルセンター",
		'zh-tw': "中立中心",
	},

	illustrator: "imoniii",
	category: "Trainer",

	effect: {
		ja: "おたがいのポケモン（「ルールを持つポケモン」をのぞく）全員は、相手の「ポケモンex・V」からワザのダメージを受けない。このカードは、トラッシュにあるかぎり、手札に加えられず、山札にもどせない。",
		'zh-tw': "雙方的所有寶可夢（「擁有規則的寶可夢」除外），不會受到對手的「寶可夢【ex】・【V】」招式的傷害。 這張卡只要在棄牌區，無法加入手牌，無法放回牌庫。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773812,
				tcgplayer: 566314,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "H",
	rarity: "ACE SPEC Rare",
};

export default card;
