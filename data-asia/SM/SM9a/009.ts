import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "トサキント",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "美しい 尾びれが 特徴だが トサキント同士は ツノの 太さと 鋭さを 競い合っているらしい。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ゆうがにおよぐ" },
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558196,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [118],
};

export default card;
