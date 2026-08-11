import { Card } from "models/database/card";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ビクティニ",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'ja-jp': "勝利を もたらす ポケモン。 ビクティニを 連れた トレーナーは どんな 勝負にも 勝てるという。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "しょうりのほし" },
			effect: {
				'ja-jp': "自分の番に、自分のポケモンのワザでコインを投げたとき、1回使える。そのコインの結果をすべてなくし、はじめからコインを投げなおす。「ビクティニ」が何匹いても、「しょうりのほし」は自分の番に1回しか使えない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "Vフレイム" },
			damage: 50,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561474,
			},
		},
	],

	retreat: 1,
	rarity: "Rare",
	dexId: [494],
};

export default card;
