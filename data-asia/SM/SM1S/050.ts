import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "デカグースGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Colorless"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ガサいれ" },
			effect: {
				ja: "自分の番に1回使える。相手の手札を見る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "とびだしヘッド" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless"],
		},
		{
			name: { ja: "デカチャンスGX" },
			damage: "10+",
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数x50ダメージ追加。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561727,
			},
		},
	],

	evolveFrom: {
		ja: "ヤングース",
	},

	retreat: 2,
	rarity: "Double rare",
	dexId: [735],

	suffix: "GX",
};

export default card;
