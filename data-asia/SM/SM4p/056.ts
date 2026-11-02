import { Card } from "../../../interfaces";
import Set from "../SM4p";

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

	attacks: [
		{
			name: { ja: "かみくだく" },
			damage: 30,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "アクセルロック" },
			damage: 120,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
		{
			name: { ja: "ガルファングGX" },
			damage: 200,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、2個トラッシュする。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560089,
			},
		},
	],

	evolveFrom: {
		ja: "イワンコ",
	},

	retreat: 1,
	rarity: "Double rare",
	dexId: [745],

	suffix: "GX",
};

export default card;
