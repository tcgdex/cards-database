import { Card } from "models/database/card";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ナゾノクサ",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "昼間は 太陽を 避けるため 冷たい 地面に 潜っている。 月の 光を 浴びて 育つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "あまいかおり" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分のポケモン1匹のHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555117,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [43],
};

export default card;
