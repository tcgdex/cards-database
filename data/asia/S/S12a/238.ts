import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ザクロ",
		'zh-tw': "查克洛",
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		ja: "この番、自分の[F]ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。自分の番に、自分の手札（「ザクロ」をのぞく）を2枚トラッシュするなら、この「ザクロ」を自分のトラッシュから、相手に見せて、手札に加える。（この効果は、自分の番に使えるサポートの枚数にふくまない。）",
		'zh-tw': "在這個回合，自己的【鬥】寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。 在自己的回合，若將自己的2張手牌（「查克洛」除外）丟棄，則可從自己的棄牌區將這張「查克洛」給對手看過後加入手牌。（在自己的回合時可使用的支援者卡的張數中，不包含這個效果。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687800,
				tcgplayer: 571776,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Special illustration rare",
};

export default card;
