import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ダブルターボエネルギー",
		'zh-tw': "雙重渦輪能量",
	},

	illustrator: "",
	category: "Energy",
	energyType: "Special",

	effect: {
		ja: "このカードは、ポケモンについているかぎり、[C]エネルギー2個ぶんとしてはたらく。このカードをつけているポケモンが使うワザの、相手のポケモンへのダメージは「-20」される。",
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供2個【無】能量。 附有這張卡的寶可夢使用的招式，對對手的寶可夢造成的傷害「-20」點。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 673065,
				tcgplayer: 570830,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 570912,
			},
		},
	],

	regulationMark: "F",
	rarity: "Uncommon",
};

export default card;
