import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヘラクロス",
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'ja-jp': "ものすごい 怪力の 持ち主。 自分の 体重の １００倍の 重さでも 楽に ぶん投げる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "のしかかり" },
			damage: 60,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ちきゅうなげ" },
			damage: 130,
			cost: ["Grass", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863315,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [214],
};

export default card;
