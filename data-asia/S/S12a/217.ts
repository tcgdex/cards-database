import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "グレイシアVSTAR",
		'zh-tw': "冰伊布VSTAR",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 260,
	types: ["Water"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				ja: "つららショット",
				'zh-tw': "冰柱射擊",
			},
			damage: 180,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
		{
			name: {
				ja: "クリスタルスター",
				'zh-tw': "[VSTAR力量]水晶星星",
			},
			damage: 220,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンはワザのダメージや効果を受けない。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687779,
				tcgplayer: 571755,
			},
		},
	],

	evolveFrom: {
		ja: "グレイシアV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [471],
};

export default card;
