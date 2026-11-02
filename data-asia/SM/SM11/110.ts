import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "プテラGX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 210,
	types: ["Fighting"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "げんしのかぜ" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手のたねポケモンが使うワザに必要なエネルギーは、【無】エネルギー1個ぶん多くなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ロックスマッシュ" },
			damage: 120,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
		{
			name: { ja: "ワイルドダイブGX" },
			damage: "50×",
			cost: ["Fighting"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×50ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557072,
			},
		},
	],

	retreat: 0,
	regulationMark: "C",
	rarity: "Hyper rare",
	dexId: [142],

	suffix: "GX",
};

export default card;
