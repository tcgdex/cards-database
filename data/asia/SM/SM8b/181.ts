import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "リオル",
	},

	illustrator: "Misa Tsutsui",
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
			type: "holo",
			thirdParty: {
				cardmarket: 551401,
			},
		},
	],

	retreat: 1,
	rarity: "Ultra Rare",
	dexId: [447],
};

export default card;
