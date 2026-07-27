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
			name: { ja: "ブラッディアイ" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ツメできりさく" },
			damage: 110,
			cost: ["Fighting", "Colorless", "Colorless"],
		},
		{
			name: { ja: "デスローグGX" },
			damage: "50×",
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンの数x50ダメージ。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 551626,
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
