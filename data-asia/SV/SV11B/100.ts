import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトモシ",
	},

	illustrator: "Naoyo Kimura",
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

	variants: [{ type: "holo" }],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [607],

	thirdParty: {
		cardmarket: 829343,
		tcgplayer: 636454,
	},
};

export default card;
