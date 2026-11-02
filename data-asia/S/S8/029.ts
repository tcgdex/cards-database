import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "モスノウ",
		'zh-tw': "雪絨蛾",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		ja: "野山を 荒らすものには 容赦 しない。 冷たいはねで 飛びまわり 吹雪を 起こして 懲らしめる。",
		'zh-tw': "絕不放過破壞山野環境的人。會用冰冷的翅膀四處飛翔，製造出暴風雪來懲罰他們。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "こごえるかぜ",
				'zh-tw': "冰凍之風",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			},
		},
		{
			name: {
				ja: "ブリザードループ",
				'zh-tw': "暴雪閉環",
			},
			damage: 160,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべて手札にもどす。",
				'zh-tw': "將這隻寶可夢身上附加的能量全部放回手牌。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575584,
				tcgplayer: 569530,
			},
		},
	],

	evolveFrom: {
		ja: "ユキハミ",
	},

	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [873],
};

export default card;
