import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アンノーン",
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'ja-jp': "古代文明の 文字に 似ている。 文字が 先か アンノーンが 先か 世界の 七不思議の ひとつ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "DAMAGE[ダメージ]" },
			effect: {
				'ja-jp': "このポケモンがバトル場にいるなら、自分の番に1回使える。自分のベンチポケモン全員にのっているダメカンの数が66個以上なら、この対戦は自分の勝ちになる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "めざめるパワー" },
			damage: 10,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558680,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [201],
};

export default card;
