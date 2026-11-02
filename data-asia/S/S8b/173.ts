import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ウォッシュ水エネルギー",
		'zh-tw': "清洗水能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[水]エネルギー1個ぶんとしてはたらく。このカードをつけている[水]ポケモンは、相手のポケモンが使うワザの効果を受けない。（すでに受けている効果は、なくならない。）",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【水】能量。 附有這張卡的【水】寶可夢，不會受到對手的寶可夢使用招式的效果的影響。（已經受到的效果無法消除。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586689,
				tcgplayer: 571425,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578451,
			},
		},
	],

	regulationMark: "D",
	rarity: "None",
};

export default card;
