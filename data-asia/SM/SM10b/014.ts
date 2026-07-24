import { Card } from "../../../interfaces";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		ja: "ユキワラシ",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		ja: "雪や 氷が 主な エサ。 暖かな アローラでは 限られた 場所 でしか 生きていけない。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "つらら" },
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557205,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [361],
};

export default card;
