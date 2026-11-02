import { Card } from "../../../interfaces";
import Set from "../SM1p";

const card: Card = {
	set: Set,
	name: {
		ja: "ガオガエンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Fire"],

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ハッスルブロー" },
			damage: "10+",
			cost: ["Fire"],
			effect: {
				ja: "自分のベンチの[炎]ポケモンの数x20ダメージ追加。",
			},
		},
		{
			name: { ja: "タイガースイング" },
			damage: "80+",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数x50ダメージ追加。",
			},
		},
		{
			name: { ja: "バーンスラムGX" },
			damage: 200,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561537,
			},
		},
	],

	evolveFrom: {
		ja: "ニャヒート",
	},

	retreat: 3,
	rarity: "Double rare",
	dexId: [727],

	suffix: "GX",
};

export default card;
