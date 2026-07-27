import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ルチャブル",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "翼を 使い 空中で 姿勢を コントロール。 防ぎにくい 頭上から 攻撃を 仕掛ける。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とびひざげり" },
			damage: 20,
			cost: ["Fighting"],
		},
		{
			name: { ja: "フリーフォール 80-" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数x20ダメージぶん、このワザのダメージは小さくなる。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559592,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [701],
};

export default card;
