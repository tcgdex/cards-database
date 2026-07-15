import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ハッサムex",
	},

	illustrator: "toriyufu",
	category: "Pokemon",
	hp: 270,
	types: ["Metal"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はがねのつばさ" },
			damage: 70,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。",
			},
		},
		{
			name: { ja: "クロスブレイカー" },
			damage: "120×",
			cost: ["Metal", "Metal"],
			effect: {
				ja: "このポケモンについている[M]エネルギーを2枚までトラッシュし、その枚数×120ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863794,
			},
		},
	],

	evolveFrom: {
		ja: "ストライク",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [212],

	suffix: "EX",
};

export default card;
