import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "チゴラス",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "自動車を バリバリと かじって 壊す おおあごの 破壊力。 １億年前に 生息していた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "かみくだく" },
			damage: 20,
			cost: ["Fighting"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "ぶちかます" },
			damage: 40,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559590,
			},
		},
	],

	retreat: 2,
	rarity: "Uncommon",
	dexId: [696],
};

export default card;
