import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "カメール",
	},

	illustrator: "Hiroki Asanuma",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ポカンと 頭を たたかれるとき 甲羅に 引っこんで 避ける。でも ちょっとだけ 尻尾が 出ているよ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かたいこうら" },
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-20」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アクアスラッシュ" },
			damage: 60,
			cost: ["Water", "Water"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558127,
			},
		},
	],

	evolveFrom: {
		ja: "ゼニガメ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [8],
};

export default card;
