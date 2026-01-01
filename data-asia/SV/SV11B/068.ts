import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "コバルオン",
	},

	illustrator: "HICO KIM",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "ポケモンを 守るため 人間と 争った 伝説の ポケモン。 沈着 冷静な 性格。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ホーリーエッジ" },
			damage: 20,
			cost: ["Metal"],
			effect: {
				ja: "相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。",
			},
		},
		{
			name: { ja: "メタルアームズ" },
			damage: "80+",
			cost: ["Metal", "Metal", "Colorless"],
			effect: {
				ja: "このポケモンに「ポケモンのどうぐ」がついているなら、40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	resistances: [{ type: "Grass", value: "-30" }],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false,
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [638],
};

export default card;
