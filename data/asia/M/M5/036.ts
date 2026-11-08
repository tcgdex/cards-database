import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガシャンデラex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 350,
	types: ["Psychic"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "じゅばくのほのお" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、相手のバトルポケモンは、にげるためのエネルギーが1個ぶん多くなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ファントムメイズ" },
			damage: "130+",
			cost: ["Psychic", "Psychic"],
			effect: {
				'ja-jp': "相手のバトルポケモンのにげるためのエネルギーの数×50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888279,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ランプラー",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "Double rare",
	dexId: [609],

	suffix: "EX",
};

export default card;
