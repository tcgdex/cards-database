import { Card } from "../../../interfaces";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		ja: "ユクシー",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "ユクシーの 誕生により 人々の 生活を 豊かにする 知恵が 生まれたと 言われている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "メモリースキップ" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザを使えない。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559768,
			},
		},
	],

	retreat: 1,
	rarity: "None",
	dexId: [480],
};

export default card;
