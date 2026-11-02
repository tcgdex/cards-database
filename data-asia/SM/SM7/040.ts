import { Card } from "../../../interfaces";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		ja: "カゲボウズ",
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "恨みの 感情が 大好き。 恨みを 持つ 人が 住む 家の 軒下に ずらりと ぶらさがる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まどわす" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559001,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [353],
};

export default card;
