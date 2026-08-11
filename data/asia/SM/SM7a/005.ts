import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドクケイル",
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "襲われると 激しく 羽ばたいて 猛毒の 粉を まき散らす。 日が暮れると 行動を はじめる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ハザードしんか" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンをどくとマヒにする。このどくでのせるダメカンの数は3個になる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かぜおこし" },
			damage: 70,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558893,
			},
		},
	],

	evolveFrom: {
		ja: "マユルド",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [269],
};

export default card;
