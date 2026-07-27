import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ズルズキン",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "脱皮した 皮を ずりあげて ダメージを 減らしつつ キック！ とさかが 大きいほど 偉そうだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "デンジャラスヘッド" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンがたねポケモンなら、50ダメージ追加。",
			},
		},
		{
			name: { ja: "ぶちかます" },
			damage: 90,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560210,
			},
		},
	],

	evolveFrom: {
		ja: "ズルッグ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [560],
};

export default card;
