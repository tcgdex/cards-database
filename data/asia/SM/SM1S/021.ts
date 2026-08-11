import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "ズバット",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "昼間は 洞穴で 寝ている。 目が ないので 超音波で 周りを 確認しながら 飛ぶ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "おどろかす" },
			cost: ["Psychic"],
			effect: {
				ja: "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見てから、相手の山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561698,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [41],
};

export default card;
