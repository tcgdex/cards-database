import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "クサイハナ",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "猛烈な クサさ！ それなのに １０００人に １人ぐらい これを 好んで かぐ 人がいる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "たまらんかおり" },
			effect: {
				ja: "自分の番に1回使える。コインを1回投げオモテなら、相手の手札を見て、その中にあるたねポケモンを1枚、相手のベンチに出す。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "よだれ" },
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557358,
			},
		},
	],

	evolveFrom: {
		ja: "ナゾノクサ",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [44],
};

export default card;
