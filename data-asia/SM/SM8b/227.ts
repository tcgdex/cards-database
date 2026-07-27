import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ルガルガンGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Fighting"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "トワイライトアイ" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アクセルロック" },
			damage: 120,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
		{
			name: { ja: "ラジアルエッジGX" },
			damage: "30×",
			cost: ["Fighting"],
			effect: {
				ja: "相手のトラッシュにあるエネルギーの枚数x30ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551631,
			},
		},
	],

	evolveFrom: {
		ja: "イワンコ",
	},

	retreat: 2,
	rarity: "Ultra Rare",
	dexId: [745],

	suffix: "GX",
};

export default card;
