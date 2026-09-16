import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ダークライ＆クレセリアLEGEND",
	},

	illustrator: "Shinji Higuchi + Noriko Takaya",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness", "Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ロストクライシス" },
			damage: 100,
			cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個、ロストゾーンにおく。このワザのダメージできぜつしたポケモンと、ついているすべてのカードは、ロストゾーンにおく。",
			},
		},
		{
			name: { ja: "つきのいざない" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のポケモンにのっているダメカンを好きなだけ選び、相手のポケモンに好きなようにのせ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }, { type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 908329,
			},
		},
	],

	retreat: 2,
	rarity: "Classic Collection",
	dexId: [491, 488],

	suffix: "Legend",
};

export default card;
