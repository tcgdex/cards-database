import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "ライボルト",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "たてがみから 放電している。 頭上に 雷雲を 作り 稲妻を 落として 攻撃する。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ボルトスタート" },
			effect: {
				ja: "自分が後攻プレイヤーなら、対戦準備でポケモンを場に出すとき、このカードを手札からウラにして出してよい。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ダブルチャージ" },
			damage: 40,
			cost: ["Lightning"],
			effect: {
				ja: "のぞむなら、自分の手札にある基本エネルギーを2枚まで、ベンチポケモン1匹につける。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558995,
			},
		},
	],

	evolveFrom: {
		ja: "ラクライ",
	},

	retreat: 0,
	rarity: "Uncommon",
	dexId: [310],
};

export default card;
