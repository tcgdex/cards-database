import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ワニノコ",
	},

	illustrator: "Hironobu Yoshida",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "発達した アゴは パワフルで なんでも かみくだいて しまうので 親のトレーナーでも 要注意。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "にらみつける" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "みだれひっかき" },
			damage: "10×",
			cost: ["Water"],
			effect: {
				ja: "コインを3回投げ、オモテの数x10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559165,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [158],
};

export default card;
