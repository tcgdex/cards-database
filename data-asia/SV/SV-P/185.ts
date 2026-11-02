import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "テツノツツミ",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "古い 書物に 登場する 謎の 物体に 似た ポケモン。 目撃例は 過去 ２件のみ。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ハイパーブロアー" },
			effect: {
				ja: "このポケモンがベンチにいるなら、自分の番に1回使える。相手のバトルポケモンをベンチポケモンと入れ替える（バトル場に出すポケモンは相手が選ぶ）。その後、このポケモンと、ついているすべてのカードを、トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "れいきゃくジェット" },
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このワザを受けた進化ポケモンは、ワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793381,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [991],
};

export default card;
