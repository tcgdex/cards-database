import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・テテフ",
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "無邪気で 残酷な アーカラの 守り神。 花の 芳しい 香りが エネルギーの 源。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サイコウェーブ" },
			damage: "20×",
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数x20ダメージ。",
			},
		},
		{
			name: { ja: "マジカルスワップ" },
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手の場のポケモンにのっているダメカンを好きなだけ選び、相手の場のポケモンに好きなようにのせ替える。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561245,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [786],
};

export default card;
