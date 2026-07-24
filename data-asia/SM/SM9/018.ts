import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ファイヤー",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "昔から 火の鳥伝説として 知られる。 羽ばたくたびに 羽が 明るく 燃え上がり 美しい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やまやき" },
			cost: ["Fire"],
			effect: {
				ja: "このポケモンについている[炎]エネルギーをすべてトラッシュし、そのエネルギーの数ぶん、相手の山札をトラッシュする。",
			},
		},
		{
			name: { ja: "ほのおのうず" },
			damage: 180,
			cost: ["Fire", "Fire", "Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、3個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558296,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [146],
};

export default card;
