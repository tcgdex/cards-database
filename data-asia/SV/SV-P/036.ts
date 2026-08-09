import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "カルボウ",
		'zh-tw': "秋明",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "焼けた 木炭に 命が 宿り ポケモンになった。 燃える 闘志で 強敵にも 戦いを 挑む。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ヒートブラスト" },
			damage: 60,
			cost: ["Fire", "Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 695777,
				tcgplayer: 587793,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [935],
};

export default card;
