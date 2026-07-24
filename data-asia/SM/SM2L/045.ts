import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒノヤコマ",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "クチバシから 火の粉を 飛ばして 獲物に ぶつける。 捕まえた 獲物は 焼いてから いただくぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "はばたく" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "かまいたち" },
			damage: 40,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561449,
			},
		},
	],

	evolveFrom: {
		ja: "ヤヤコマ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [662],
};

export default card;
