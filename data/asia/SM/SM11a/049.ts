import { Card } from "models/database/card";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "キテルグマ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'ja-jp': "大きく 手を 振るのは 威嚇と 警戒の サイン。 一刻も 早く 逃げないと 命は ない。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "キャリーラン" },
			effect: {
				'ja-jp': "このポケモンがベンチにいるかぎり、自分のバトルポケモンのにげるためのエネルギーは、2個ぶん少なくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ラリアット" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556709,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ヌイコグマ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [760],
};

export default card;
