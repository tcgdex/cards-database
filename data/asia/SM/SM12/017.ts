import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキワラシ",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "雪や 氷が 主な エサ。 暖かな アローラでは 限られた 場所 でしか 生きていけない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "れんぞくずつき" },
			damage: "20×",
			cost: ["Water"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554792,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [361],
};

export default card;
