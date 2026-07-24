import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "キテルグマ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "大きく 手を 振るのは 威嚇と 警戒の サイン。 一刻も 早く 逃げないと 命は ない。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "キャリーラン" },
			effect: {
				ja: "このポケモンがベンチにいるかぎり、自分のバトルポケモンのにげるためのエネルギーは、2個ぶん少なくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ラリアット" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
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
		ja: "ヌイコグマ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [760],
};

export default card;
