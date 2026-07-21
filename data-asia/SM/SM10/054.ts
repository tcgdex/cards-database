import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ケケンカニ",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "ハサミの 中に 冷気を 溜めて ぶん殴る。 分厚い 氷の 壁も 粉々に してしまうぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ファイトアローン" },
			damage: "30+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の場のポケモンの数が、相手より少ないなら、その少ない数x50ダメージ追加。",
			},
		},
		{
			name: { ja: "マグナムパンチ" },
			damage: 80,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557412,
			},
		},
	],

	evolveFrom: {
		ja: "マケンカニ",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [740],
};

export default card;
