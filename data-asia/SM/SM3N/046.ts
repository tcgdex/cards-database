import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "キテルグマ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "圧倒的な 筋力を 持つ 非常に 危険な ポケモン。 生息地は 基本 立ち入り禁止。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かきみだす" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手の山札を上から3枚トラッシュする。",
			},
		},
		{
			name: { ja: "あばれまわる" },
			damage: 120,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561046,
			},
		},
	],

	evolveFrom: {
		ja: "ヌイコグマ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [760],
};

export default card;
