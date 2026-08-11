import { Card } from "models/database/card";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カプ・コケコ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'ja-jp': "目にも 止まらぬ スピードで 敵を かく乱する。 ひどく 怒りっぽいが なんで 怒ったかは すぐ 忘れる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひるがえす" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "のぞむなら、このポケモンをベンチポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "フラッシュボルト" },
			damage: 120,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンは「フラッシュボルト」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558920,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [785],
};

export default card;
