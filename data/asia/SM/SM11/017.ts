import { Card } from "models/database/card";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アバゴーラ",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		'ja-jp': "アゴの 力が 凄まじい。 オムスターや オムナイトの カラも 気にせず 丸ごと 食っていた。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "こだいのしきたり" },
			effect: {
				'ja-jp': "このポケモンがいるかぎり、相手の場にある「ポケモンのどうぐ」の効果は、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "アクアインパクト" },
			damage: "80+",
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "相手のバトルポケモンのにげるためのエネルギーの数×20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556976,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "プロトーガ",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [565],
};

export default card;
