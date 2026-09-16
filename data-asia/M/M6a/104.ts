import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラ ナッシー",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "スケールアップ" },
			effect: {
				ja: "このポケモンに[G]エネルギーが6個以上ついているなら、このポケモンは最大HPが「＋250」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "メガドレイン" },
			damage: 150,
			cost: ["Grass", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンのHPを「50」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908282,
			},
		},
	],

	evolveFrom: {
		ja: "タマタマ",
	},

	retreat: 4,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [103],
};

export default card;
