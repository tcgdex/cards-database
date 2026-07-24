import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ケケンカニ",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "ハサミの 中に 冷気を 溜めて ぶん殴る。 分厚い 氷の 壁も 粉々に してしまうぞ。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "かたいこうら" },
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ひょうけつパンチ" },
			damage: "80+",
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンに[水]エネルギーがついているなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556668,
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
