import { Card } from "models/database/card";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒスイ ゾロアーク",
		'zh-tw': "洗翠 索羅亞克",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "白髪 振り乱し姿 死神の如く。 我が身をも 切り裂く 激しき怨讐にて 仇 襲い 道連れ覚悟で 仕留めたり。",
		'zh-tw': "瘋狂舞動白髮的姿態如同死神。在足以撕裂己身的深刻仇怨驅使下， 抱定同歸於盡之心襲殺仇敵。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "はめつののろい",
				'zh-tw': "破滅詛咒",
			},
			cost: [],
			effect: {
				'ja-jp': "次の相手の番の終わりに、このワザを受けたポケモンはきぜつする。",
				'zh-tw': "在下個對手的回合結束時，將受到這個招式的寶可夢【氣絕】。",
			},
		},
		{
			name: {
				'ja-jp': "よびもどす",
				'zh-tw': "喚回",
			},
			cost: ["Psychic"],
			effect: {
				'ja-jp': "自分のトラッシュから好きなカードを1枚選び、相手に見せて、手札に加える。",
				'zh-tw': "從自己的棄牌區任意選擇1張卡，在給對手看過後加入手牌。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656334,
				tcgplayer: 570693,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヒスイ ゾロア",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [571],
};

export default card;
