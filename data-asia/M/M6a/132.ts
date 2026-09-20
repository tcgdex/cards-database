import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジラーチex",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 160,
	types: ["Metal"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねがいをかなえる" },
			cost: ["Colorless"],
			effect: {
				ja: "自分の手札が7枚になるように、山札を引く。",
			},
		},
		{
			name: { ja: "スピードスター" },
			damage: 150,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908310,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Special illustration rare",
	dexId: [385],

	suffix: "EX",
};

export default card;
