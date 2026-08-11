import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "ガマガル",
	},

	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "頭の コブを 振動させると 水中が 波立つ だけでなく 地面も 地震のように 揺れる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ミニじしん" },
			damage: 60,
			cost: ["Fighting"],
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555201,
			},
		},
	],

	evolveFrom: {
		ja: "オタマロ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [536],
};

export default card;
