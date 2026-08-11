import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "ジジーロンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ホーリーエッジ" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンについている特殊エネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "ぎゃくじょう" },
			damage: "80+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチポケモンにダメカンがのっているなら、70ダメージ追加。",
			},
		},
		{
			name: { ja: "だいしゃりんGX" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札をすべて山札にもどして切る。その後、山札を10枚引く。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560120,
			},
		},
	],

	retreat: 2,
	rarity: "Double rare",
	dexId: [780],

	suffix: "GX",
};

export default card;
