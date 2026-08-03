import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ムゲンダイナVMAX",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 340,
	types: ["Darkness"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ムゲンゾーン" },
			effect: {
				ja: "自分の場のポケモン全員が[悪]タイプならはたらく。自分のベンチに出せる[悪]ポケモンの数は8匹になり、別のタイプは場に出せない。（この特性がはたらかなくなったとき、ベンチが5匹になるまでトラッシュする。）",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ドレッドエンド" },
			damage: "30×",
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "自分の場の[悪]ポケモンの数×30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587045,
				tcgplayer: 571499,
			},
		},
	],

	evolveFrom: {
		ja: "ムゲンダイナV",
	},

	retreat: 3,
	regulationMark: "D",
	rarity: "Character Super Rare",
	dexId: [890],
};

export default card;
