import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドクロッグ",
		'zh-tw': "毒骷蛙",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "跳ねるように 敵に 近づくと 毒のツメで えぐるように 打つ！ かすり傷でも 相手は ＫＯだ。",
		'zh-tw': "一躍而起接近敵人，用有毒的爪子狠抓對方！ 光是擦傷就能將對手ＫＯ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "つきさす",
				'zh-tw': "突刺",
			},
			damage: 30,
			cost: ["Darkness"],
		},
		{
			name: {
				ja: "とびこみアッパー",
				'zh-tw': "衝天跳水",
			},
			damage: 120,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「+50」される。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「+50」點。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656372,
				tcgplayer: 570712,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577124,
			},
		},
	],

	evolveFrom: {
		ja: "グレッグル",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [454],
};

export default card;
