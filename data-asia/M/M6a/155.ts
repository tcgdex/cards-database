import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲノセクトEX",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "レッドシグナル" },
			effect: {
				ja: "この特性は、自分の手札から「プラズマエネルギー」をこのポケモンにつけるたび、1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "メガロキャノン" },
			damage: 100,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、そのポケモンにも20ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908333,
			},
		},
	],

	retreat: 1,
	rarity: "Classic Collection",
	dexId: [649],

	suffix: "EX",
};

export default card;
