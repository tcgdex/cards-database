import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "フライゴンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 240,
	types: ["Fighting"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "さじんのまもり" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "デザートハリケーン" },
			damage: "120+",
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: {
				ja: "場にスタジアムが出ているなら、120ダメージ追加。その後、そのスタジアムをトラッシュする。",
			},
		},
		{
			name: { ja: "ソニックエッジGX" },
			damage: 220,
			cost: ["Fighting", "Fighting", "Fighting"],
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 554881,
			},
		},
	],

	evolveFrom: {
		ja: "ビブラーバ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Double rare",
	dexId: [330],

	suffix: "GX",
};

export default card;
