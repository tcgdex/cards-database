import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "エンニュート",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "毒ガスには 多くの フェロモンが 含まれている。 薄めることで 官能的な 香水が できる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "パニックどく" },
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをどくとやけどとこんらんにする。",
			},
		},
		{
			name: { ja: "アサシンネイル" },
			damage: "60+",
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが特殊状態なら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559977,
			},
		},
	],

	evolveFrom: {
		ja: "ヤトウモリ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [758],
};

export default card;
