import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "マグカルゴ",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "背中の 殻は 崩れやすいが ときどき 体内を 巡っている 高熱の 炎が 噴き出す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ふみならす" },
			cost: ["Fire"],
			effect: {
				ja: "相手の山札を上から2枚トラッシュする。",
			},
		},
		{
			name: { ja: "かえんほうしゃ" },
			damage: 80,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555129,
			},
		},
	],

	evolveFrom: {
		ja: "マグマッグ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [219],
};

export default card;
