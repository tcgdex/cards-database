import { Card } from "models/database/card";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガジガルデex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 310,
	types: ["Fighting"],

	description: {
		'ja-jp': "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ガイアウェーブ" },
			damage: 200,
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
		{
			name: { ja: "ムニキスゼロ" },
			cost: ["Fighting", "Fighting", "Fighting", "Fighting", "Fighting"],
			effect: {
				'ja-jp': "相手のポケモン全員に対して、それぞれ1回ずつコインを投げ、オモテが出たポケモン全員に、それぞれ150ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	retreat: 2,
	regulationMark: "I",
	rarity: "Mega Hyper Rare",
	dexId: [718],

	suffix: "EX",

	thirdParty: {
		cardmarket: 868127,
		tcgplayer: 674436,
	},
};

export default card;
