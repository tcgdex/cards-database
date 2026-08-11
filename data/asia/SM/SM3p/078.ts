import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "エンテイGX",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かえん" },
			damage: 50,
			cost: ["Fire", "Colorless"],
		},
		{
			name: { ja: "ほのおのキバ" },
			damage: 100,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "ブレイブバーンGX" },
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン1匹に、150ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560236,
			},
		},
	],

	retreat: 2,
	rarity: "Hyper rare",
	dexId: [244],

	suffix: "GX",
};

export default card;
