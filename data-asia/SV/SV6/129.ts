import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "スグリ",
		'zh-tw': "烏栗",
	},

	illustrator: "Teeziro",
	category: "Trainer",

	effect: {
		ja: "このカードは、2つの効果から1つを選んで使う。◆自分のバトルポケモンをベンチポケモンと入れ替える。◆この番、自分のポケモンが使うワザの、相手のバトル場の「ポケモンex・V」へのダメージは「+30」される。",
		'zh-tw': "這張卡從2種效果中選擇1種使用。 ◆將自己的戰鬥寶可夢與備戰寶可夢互換。 ◆在這個回合，自己的寶可夢使用的招式，對對手的戰鬥場的「寶可夢【ex】・【V】」造成的傷害「+30」點。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767563,
				tcgplayer: 568119,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Special illustration rare",
};

export default card;
