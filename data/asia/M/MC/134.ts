import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヤトウモリ",
	},

	illustrator: "Felicia Chen",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "メスのみが フェロモンを 発する ガスを 作れる。 骨抜きにされた オスは メスの 言いなりになるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひのこ" },
			damage: 30,
			cost: ["Fire"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863430,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [757],
};

export default card;
