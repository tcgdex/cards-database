import { Card } from "models/database/card";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カビゴン",
	},

	illustrator: "kanahei",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'ja-jp': "食うか 寝るかしか していないが なにかの きっかけで 本気を出すと 凄い パワーを 発揮するらしい。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ながらぐい" },
			effect: {
				'ja-jp': "ポケモンチェックのたび、このポケモンのHPを「10」回復する。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ビッグカウンター" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンが「TAG TEAM」なら、120ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557434,
			},
		},
	],

	retreat: 4,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [143],
};

export default card;
