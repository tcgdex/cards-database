import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・テテフGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 170,
	types: ["Psychic"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ワンダータッチ" },
			effect: {
				ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札にあるサポートを1枚、相手に見せてから、手札に加える。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エナジードライブ" },
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "おたがいのバトルポケモンについているエネルギーの数x20ダメージ。このワザのダメージは弱点・抵抗力を計算しない。",
			},
		},
		{
			name: { ja: "カプキュアーGX" },
			cost: ["Psychic"],
			effect: {
				ja: "自分のベンチポケモン2匹のHPを、すべて回復する。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561456,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [786],

	suffix: "GX",
};

export default card;
