import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,

	name: {
		ja: "ゴルバット",
	},

	illustrator: "Mousho",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "生き物の 血液が 好物。 腹ペコの 仲間に 吸った 血を 分け与えることも あるという。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "おんみつひこう",
			},
			damage: 30,
			cost: ["Darkness"],
			effect: {
				ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	variants: [{ type: "normal" }],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [42],

	thirdParty: {
		cardmarket: 876948
	}
};

export default card;
