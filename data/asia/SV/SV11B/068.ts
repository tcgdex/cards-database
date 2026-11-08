import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コバルオン",
	},

	illustrator: "HICO KIM",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'ja-jp': "ポケモンを 守るため 人間と 争った 伝説の ポケモン。 沈着 冷静な 性格。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ホーリーエッジ" },
			damage: 20,
			cost: ["Metal"],
			effect: {
				'ja-jp': "相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。",
			},
		},
		{
			name: { ja: "メタルアームズ" },
			damage: "80+",
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				'ja-jp': "このポケモンに「ポケモンのどうぐ」がついているなら、40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{ type: "holo" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [638],

	thirdParty: {
		cardmarket: 828601,
		tcgplayer: 636422,
	},
};

export default card;
