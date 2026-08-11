import { Card } from "../../../interfaces";
import Set from "../CP2";

const card: Card = {
	set: Set,
	name: {
		ja: "ルチャブル",
	},

	illustrator: "match",
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
			name: { ja: "スカイキック" },
			damage: 40,
			cost: ["Fighting", "Fighting"],
			effect: {
				ja: "このワザのダメージは抵抗力の計算をしない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 563496,
				tcgplayer: 605338,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [701],
};

export default card;
