import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ベロリンガ",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "舌が 身長の ２倍もある。 エサを 取ったり 攻撃を したりと まるで 手のように 動かせる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "したでとる" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分の山札を3枚引く。",
			},
		},
		{
			name: { ja: "たたきつける" },
			damage: "50×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを2回投げ、オモテの数x50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560000,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [108],
};

export default card;
