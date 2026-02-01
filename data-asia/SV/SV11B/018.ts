import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "メラルバ",
	},

	illustrator: "mashu",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "太陽から 生まれた ポケモンと 信じられてきた。 進化するとき 全身が 炎に 包まれる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つつきおとす" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [636],

	thirdParty: {
		cardmarket: 828464,
		tcgplayer: 636372,
	},
};

export default card;
