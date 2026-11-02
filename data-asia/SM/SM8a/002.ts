import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャヒート",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "前足の 力が 自慢。 パンチの 一撃で 鉄の棒も へし曲げて しまうのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほえる" },
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
		{
			name: { ja: "ツメできりさく" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558576,
			},
		},
	],

	evolveFrom: {
		ja: "ニャビー",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [726],
};

export default card;
