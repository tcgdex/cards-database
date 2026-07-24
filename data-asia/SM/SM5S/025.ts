import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤミカラス",
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "不吉の 証と 嫌われるが 仲良しの トレーナーには キラキラ 光るものを プレゼントするよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "くろいまなざし" },
			damage: 10,
			cost: ["Darkness"],
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559979,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [198],
};

export default card;
