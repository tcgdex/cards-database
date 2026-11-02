import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "シンオウ神殿",
		'zh-tw': "神奧神殿",
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		ja: "おたがいの場のポケモンについている特殊エネルギーの効果はすべてなくなり、[C]エネルギー1個ぶんとしてはたらく。",
		'zh-tw': "雙方的場上寶可夢身上附加的特殊能量的效果全部消除，視為提供1個【無】能量。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651126,
				tcgplayer: 569910,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
