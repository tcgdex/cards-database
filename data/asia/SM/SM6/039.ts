import { Card } from "models/database/card";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドラミドロ",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "ドラミドロが 住む 海域に 迷いこんだ 船は ２度と 生きて 戻れないと 言われている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "どくのトゲ" },
			effect: {
				'ja-jp': "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをどくにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "たつまき" },
			damage: 60,
			cost: ["Psychic", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数ぶん、相手のバトルポケモンについているエネルギーをトラッシュする。すべてウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559584,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "クズモー",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [691],
};

export default card;
