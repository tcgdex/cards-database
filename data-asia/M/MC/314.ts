import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ユクシー",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "知識の神と 呼ばれている。 目を 合わせた 者の 記憶を 消してしまう 力を 持つという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "いたみのきおく" },
			cost: ["Psychic"],
			effect: {
				ja: "相手のポケモン全員に、それぞれダメカンを2個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863616,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [480],
};

export default card;
