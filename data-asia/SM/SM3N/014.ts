import { Card } from "../../../interfaces";
import Set from "../SM3N";

const card: Card = {
	set: Set,
	name: {
		ja: "ライチュウ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "電撃は １０万ボルトに 達することもあり ヘタに触ると インド象でも 気絶する。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "エボルショック" },
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンをマヒにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ボルテッカー" },
			damage: 130,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561014,
			},
		},
	],

	evolveFrom: {
		ja: "ピカチュウ",
	},

	retreat: 1,
	rarity: "Rare",
	dexId: [26],
};

export default card;
