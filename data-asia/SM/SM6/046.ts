import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "ガチゴラス",
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	description: {
		ja: "１億年前の 世界では 無敵を ほこり 王様のように ふるまっていた ポケモン。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ティラノハート" },
			effect: {
				ja: "自分の場のポケモンの数が、相手と同じか少ないなら、このポケモンが使うワザのダメージは「+60」され、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かみくだく" },
			damage: 100,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559591,
			},
		},
	],

	evolveFrom: {
		ja: "チゴラス",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [697],
};

export default card;
