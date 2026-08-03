import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "アロマ草エネルギー",
		'zh-tw': "芳香草能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[草]エネルギー1個ぶんとしてはたらく。このカードをつけている[草]ポケモンは、特殊状態にならず、受けている特殊状態は、すべて回復する。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【草】能量。附有這張卡的【草】寶可夢不會陷入特殊狀態，並將受到的特殊狀態全部恢復。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586687,
				tcgplayer: 571423,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578449,
			},
		},
	],

	regulationMark: "D",
	rarity: "None",
};

export default card;
