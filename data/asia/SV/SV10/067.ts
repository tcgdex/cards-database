import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のベトベター",
		'zh-tw': "<火箭隊的>臭泥",
		'zh-cn': "<火箭隊的>臭泥",
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "ヘドロが ポケモンになった。 汚い 場所に 集まって 体の ばい菌を 増やしていく。",
		'zh-tw': "污泥變成的寶可夢。 會聚集在骯髒的地方 來繁殖身體的細菌。",
		'zh-cn': "污泥變成的寶可夢。 會聚集在骯髒的地方 來繁殖身體的細菌。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "しんしょくヘドロ",
				'zh-tw': "浸蝕污泥",
				'zh-cn': "浸蝕污泥",
			},
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "次の相手の番の終わりに、このワザを受けたポケモンと、ついているすべてのカードを、トラッシュする。",
				'zh-tw': "在下個對手的回合結束時，將受到這個招式的寶可夢與附加的卡全部丟棄。",
				'zh-cn': "在下個對手的回合結束時，將受到這個招式的寶可夢與附加的卡全部丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821899,
				tcgplayer: 628708,
			},
		},
	],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [88],
};

export default card;
