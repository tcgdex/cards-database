import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "デンチュラ",
	},

	illustrator: "mashu",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		'ja-jp': "電気を 帯びた お腹の 毛を 飛ばして 攻撃。 毛が 刺さると 三日三晩 全身が 痺れる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ふくがん" },
			effect: {
				'ja-jp': "このポケモンが使うワザの、相手のバトル場の特性を持つポケモンへのダメージは「+50」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ビリビリウェブ" },
			damage: "50+",
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "このポケモンに[L]エネルギーがついているなら、80ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863341,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "バチュル",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [596],
};

export default card;
