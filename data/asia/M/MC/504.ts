import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "シュバルゴ",
	},

	illustrator: "Takumi Wada",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'ja-jp': "槍を 構え 敵へ 突撃。 ネギガナイトとの 決闘を 描いた 絵画が 有名。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "つきさす" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "アイアンバスター" },
			damage: 120,
			cost: ["Metal", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863806,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "カブルモ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [589],
};

export default card;
