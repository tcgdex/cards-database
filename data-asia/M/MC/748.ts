import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "マリル",
	},

	illustrator: "Rond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "脂が 詰まっている 尻尾が 浮き袋の 代わりと なるので 流れの 速い 川も 平気。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かくれる" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
		{
			name: { ja: "はねまわる" },
			damage: 20,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864050,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [183],
};

export default card;
