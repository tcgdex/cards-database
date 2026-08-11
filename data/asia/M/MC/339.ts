import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "リーリエのアブリボン",
	},

	illustrator: "tono",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "落ちこんでいる 人や ポケモンの 気持ちを 感じ取っては 手作りの 花粉団子で 元気づけたりする。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "おさそいウインク" },
			effect: {
				'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手の手札を見て、その中からたねポケモンを好きなだけ選び、相手のベンチに出す。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "マジカルショット" },
			damage: 50,
			cost: ["Psychic"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863641,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "リーリエのアブリー",
	},

	retreat: 0,
	regulationMark: "I",
	rarity: "None",
	dexId: [743],
};

export default card;
