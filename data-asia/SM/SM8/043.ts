import { Card } from "../../../interfaces";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		ja: "アンノーン",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "古代文明の 文字に 似ている。 文字が 先か アンノーンが 先か 世界の 七不思議の ひとつ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "MISSING[ミッシング]" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。相手のロストゾーンにあるサポートの枚数が12枚以上なら、この対戦は自分の勝ちになる。",
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
				cardmarket: 558682,
			},
		},
	],

	retreat: 1,
	rarity: "Uncommon",
	dexId: [201],
};

export default card;
