import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラサンドパン",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "火山噴火 から 逃れるうちに 雪山に 棲みつくように なった。 雪しぶきをあげ 雪原を 駆ける。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ゆきかき" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を1枚引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "スマッシュターン" },
			damage: 50,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561215,
			},
		},
	],

	evolveFrom: {
		ja: "アローラサンド",
	},

	retreat: 2,
	rarity: "None",
	dexId: [28],
};

export default card;
