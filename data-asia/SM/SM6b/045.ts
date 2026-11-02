import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ボーマンダGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Dragon"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ドラゴンフロート" },
			effect: {
				ja: "このポケモンがいるかぎり、自分のポケモン全員（「ポケモンGX・EX」をのぞく）のにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ぐれんのほのお" },
			damage: 200,
			cost: ["Fire", "Water", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、2個トラッシュする。",
			},
		},
		{
			name: { ja: "かえんひこうGX" },
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559195,
			},
		},
	],

	evolveFrom: {
		ja: "コモルー",
	},

	retreat: 2,
	rarity: "Double rare",
	dexId: [373],

	suffix: "GX",
};

export default card;
