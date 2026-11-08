import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エーフィex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "サイコアウト" },
			damage: 160,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手の手札からオモテを見ないで1枚選び、トラッシュする。",
			},
		},
		{
			name: { ja: "アマゼツ" },
			cost: ["Grass", "Psychic", "Darkness"],
			effect: {
				'ja-jp': "相手の進化しているポケモン全員の上から、それぞれ「進化カード」を1枚ずつはがして退化させる。はがしたカードは、相手の山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863600,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "イーブイ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [196],

	suffix: "EX",
};

export default card;
