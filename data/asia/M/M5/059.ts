import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "タテトプス",
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "頑丈な 顔のおかげで 敵は 少なかったと 思われる。 太古の ジャングルに 棲んでいた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "くだく" },
			damage: 50,
			cost: ["Metal", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 888321,
			},
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "Common",
	dexId: [410],
};

export default card;
