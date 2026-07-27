import { Card } from "../../../interfaces";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトモシ",
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "ヒトモシの 灯す 明かりは 人や ポケモンの 生命力を 吸い取って 燃えているのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "のろう" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンに、ダメカンを1個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558846,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [607],
};

export default card;
