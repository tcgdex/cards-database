import { Card } from "models/database/card";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "テッシード",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'ja-jp': "洞穴の 天井に 突きささり 岩の 鉄分を 吸いとる。 危険がせまると トゲを 撃ち出す。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "れんぞくころがり" },
			damage: "20×",
			cost: ["Metal"],
			effect: {
				'ja-jp': "ウラが出るまでコインを投げ、オモテの数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558611,
			},
		},
	],

	retreat: 3,
	rarity: "Common",
	dexId: [597],
};

export default card;
