import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハッサムex",
	},

	illustrator: "PLANETA Tsuji",
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
				'ja-jp': "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。",
			},
		},
		{
			name: { ja: "クロスブレイカー" },
			damage: "120×",
			cost: ["Metal", "Metal"],
			effect: {
				'ja-jp': "このポケモンについている[M]エネルギーを2枚までトラッシュし、その枚数×120ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 783441,
				tcgplayer: 626014,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ストライク",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Promo",
	dexId: [212],

	suffix: "EX",
};

export default card;
