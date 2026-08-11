import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ヨワシ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		ja: "ピンチになると 目が 潤みだし 輝く。 その光に 群れる 仲間と 敵に 立ち向かうのだ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ぎょぐん" },
			effect: {
				ja: "自分の番に1回使える。自分の手札にある「ヨワシGX」を1枚、このカードと入れ替える（ついているカード・ダメカン・特殊状態・効果などは、すべて引きつぐ）。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ねらいうち" },
			cost: ["Water"],
			effect: {
				ja: "相手のポケモン1匹に、10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561417,
			},
		},
	],

	retreat: 0,
	rarity: "Common",
	dexId: [746],
};

export default card;
