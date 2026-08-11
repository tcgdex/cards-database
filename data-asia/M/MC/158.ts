import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "カスミのギャラドス",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	description: {
		ja: "一度 姿を 現すと まわりを すべて 焼き尽くさないと 怒りが 鎮まらない という。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ザブザブパニック" },
			damage: "70×",
			cost: ["Water"],
			effect: {
				ja: "自分の山札を上から7枚トラッシュし、その中にある「カスミのポケモン」の枚数×70ダメージ。",
			},
		},
		{
			name: { ja: "たきのぼり" },
			damage: 120,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863454,
			},
		},
	],

	evolveFrom: {
		ja: "カスミのコイキング",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "None",
	dexId: [130],
};

export default card;
