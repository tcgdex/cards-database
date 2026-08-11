import { Card } from "models/database/card";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メタグロスVMAX",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 330,
	types: ["Metal"],

	stage: "VMAX",

	attacks: [
		{
			name: { ja: "でんじきゅうちゃく" },
			cost: ["Metal"],
			effect: {
				'ja-jp': "自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。",
			},
		},
		{
			name: { ja: "ダイラッシュ" },
			damage: 100,
			cost: ["Metal", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンの「ダイラッシュ」のダメージは「+150」される。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560987,
				tcgplayer: 569315,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "メタグロスV",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Hyper rare",
	dexId: [376],
};

export default card;
