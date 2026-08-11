import { Card } from "models/database/card";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アーボック",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "最新の 研究で お腹の 模様は ２０種類 以上の パターンが あることが 判明。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "いまわのもよう" },
			effect: {
				'ja-jp': "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、相手の手札からオモテを見ないで、2枚トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ロケットテール" },
			damage: "50+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のトラッシュに「ムサシとコジロウ」があるなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557227,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "アーボ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [24],
};

export default card;
