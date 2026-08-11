import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ライボルト",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "たてがみから 放電している。 頭上に 雷雲を 作り 稲妻を 落として 攻撃する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "フラッシュバリア" },
			damage: 50,
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "次の相手の番、このポケモンは進化ポケモンからワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "ソニックエッジ" },
			damage: 110,
			cost: ["Lightning", "Lightning", "Lightning"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888265,
			},
		},
	],

	evolveFrom: {
		ja: "ラクライ",
	},

	retreat: 1,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [310],
};

export default card;
