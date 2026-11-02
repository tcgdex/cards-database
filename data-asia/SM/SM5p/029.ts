import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "リオル",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "一晩中 走っていられる タフさが あり 頑張り屋 だが まだまだ ひよっ子 なのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みきり" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
		{
			name: { ja: "ジャブ" },
			damage: 10,
			cost: ["Fighting"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559779,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [447],
};

export default card;
