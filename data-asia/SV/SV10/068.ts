import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のベトベトン",
		'zh-tw': "<火箭隊的>臭臭泥",
		'zh-cn': "<火箭隊的>臭臭泥",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],

	description: {
		ja: "汚い ヘドロが 全身に まとわりつく。 足跡に 触っただけで 毒に 侵される。",
		'zh-tw': "全身上下沾滿污泥。 光是碰到牠的足跡， 都會受到毒素的侵襲。",
		'zh-cn': "全身上下沾滿污泥。 光是碰到牠的足跡， 都會受到毒素的侵襲。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ベトベトまみれ",
				'zh-tw': "渾身臭臭",
				'zh-cn': "渾身臭臭",
			},
			damage: 40,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。次の相手の番、このワザを受けたポケモンは、にげられない。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。在下個對手的回合，受到這個招式的寶可夢無法撤退。",
				'zh-cn': "將對手的戰鬥寶可夢【混亂】。在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			},
		},
		{
			name: {
				ja: "ベノムハザード",
				'zh-tw': "毒液危害",
				'zh-cn': "毒液危害",
			},
			damage: "100×",
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが受けている特殊状態の数×100ダメージ。",
				'zh-tw': "造成對手的戰鬥寶可夢處於特殊狀態的數量×100點傷害。",
				'zh-cn': "造成對手的戰鬥寶可夢處於特殊狀態的數量×100點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821900,
				tcgplayer: 628709,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のベトベター",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [89],
};

export default card;
