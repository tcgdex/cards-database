import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "フェローチェGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ファストレイド" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				ja: "このワザは、先攻プレイヤーの最初の番でも使える。",
			},
		},
		{
			name: { ja: "クルーエルスパイク" },
			damage: 60,
			cost: ["Grass", "Grass"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
		{
			name: { ja: "ビューティーGX" },
			damage: "50×",
			cost: ["Grass", "Grass"],
			effect: {
				ja: "相手がすでにとったサイドの枚数x50ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560148,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [795],

	suffix: "GX",
};

export default card;
