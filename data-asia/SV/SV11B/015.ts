import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトモシ",
	},

	illustrator: "satoma",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "ヒトモシの 灯す 明かりは 人や ポケモンの 生命力を 吸い取って 燃えているのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "てらしてもやす" },
			cost: ["Fire"],
			effect: {
				ja: "自分の山札を上から1枚見て、もとにもどす。のぞむなら、そのカードをトラッシュする。",
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
	dexId: [607],

	thirdParty: {
		cardmarket: 828461,
		tcgplayer: 636369,
	},
};

export default card;
