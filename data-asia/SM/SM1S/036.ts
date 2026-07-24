import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "ワルビアル",
	},

	illustrator: "Hajime Kusajima",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],

	description: {
		ja: "砂嵐でも ５０キロ先に いる 小さな 獲物も 発見する 特殊な 両目を 持つ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "いいがかり" },
			damage: "20+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の手札の枚数x20ダメージ追加。",
			},
		},
		{
			name: { ja: "ダークファング" },
			damage: 120,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561713,
			},
		},
	],

	evolveFrom: {
		ja: "ワルビル",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [553],
};

export default card;
