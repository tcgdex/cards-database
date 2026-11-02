import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "サシカマス",
		'zh-tw': "雷伊布VMAX",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "鋭く 尖った 顎が 自慢。 少しでも 動くものを 見つけると 一直線に 突撃する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "むれる",
				'zh-tw': "極巨迅雷",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から「サシカマス」を2枚まで選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "對手的身上放置有傷害指示物的1隻備戰寶可夢也受到100點傷害。[在備戰區不計算弱點・抵抗力。]",
			},
		},
		{
			name: { ja: "つつく" },
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525250,
				tcgplayer: 597314,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [846],
};

export default card;
