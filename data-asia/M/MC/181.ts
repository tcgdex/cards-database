import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ホエルオー",
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 240,
	types: ["Water"],

	description: {
		ja: "とにかく どでかいので 人気。 ホエルオーウォッチングは 各地で 人気の 観光プラン なのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ハイドロポンプ" },
			damage: "10+",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについている[W]エネルギーの数×50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863477,
			},
		},
	],

	evolveFrom: {
		ja: "ホエルコ",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "None",
	dexId: [321],
};

export default card;
