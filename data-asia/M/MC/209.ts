import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ケケンカニ",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		ja: "パンチは 強力だが 動きが 遅い。 口から 氷の 泡を 吹いて 相手の 動きを 止める。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "したごしらえ" },
			effect: {
				ja: "自分のトラッシュにある「ハイダイ」の枚数ぶん、このポケモンがワザを使うための[C]エネルギーは少なくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "おおぶりパンチ" },
			damage: 250,
			cost: ["Water", "Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンは「おおぶりパンチ」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863505,
			},
		},
	],

	evolveFrom: {
		ja: "マケンカニ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [740],
};

export default card;
