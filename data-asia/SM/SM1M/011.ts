import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "ニョロボン",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	description: {
		ja: "体脂肪率は 大体０％。 全身が 筋肉で 重いので 泳ぐ 力が 発達した。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ぐるぐるパンチ" },
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "めざましビンタ" },
			damage: "80+",
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが特殊状態なら、80ダメージ追加。その後、相手のバトルポケモンの特殊状態をすべて回復する。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561612,
			},
		},
	],

	evolveFrom: {
		ja: "ニョロゾ",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [62],
};

export default card;
