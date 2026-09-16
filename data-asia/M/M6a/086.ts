import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ザマゼンタ",
	},

	illustrator: "Tsuyoshi Nagano",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "いかなる 攻撃も 弾き返す 姿は 格闘王の盾 と 呼ばれ 恐れ 崇められた。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はじきおとす" },
			damage: 20,
			cost: ["Metal"],
			effect: {
				ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。",
			},
		},
		{
			name: { ja: "シールドプレス" },
			damage: 100,
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908264,
			},
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [889],
};

export default card;
