import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "フェローチェ&マッシブーンGX",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 260,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ジェットパンチ" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "エレガントソール" },
			damage: 190,
			cost: ["Grass", "Grass", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンの「エレガントソール」のダメージは「60」になる。",
			},
		},
		{
			name: { ja: "ビーストゲームGX" },
			damage: 50,
			cost: ["Grass"],
			effect: {
				ja: "このワザのダメージで、相手のポケモンがきぜつしたなら、サイドを1枚多くとる。追加でエネルギーが7個ついているなら、多くとる枚数は3枚になる。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558173,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [795, 794],

	suffix: "TAG TEAM-GX",
};

export default card;
