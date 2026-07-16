import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "ギルガルド",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		ja: "歴代の 王が 連れていた。 霊力で 人や ポケモンの 心を 操り 従わせる。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "くちないつるぎ" },
			effect: {
				ja: "このポケモンが、相手のポケモンからワザのダメージを受けてきぜつしたとき、トラッシュせず、手札にもどす。（ポケモン以外のカードは、すべてトラッシュする。）",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ガレキスラッシュ" },
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュにあるグッズの枚数×10ダメージ。与えられるダメージはグッズ13枚ぶんまで。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557003,
			},
		},
	],

	evolveFrom: {
		ja: "ニダンギル",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [681],
};

export default card;
