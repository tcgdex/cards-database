import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌイコグマ",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		ja: "大木も へし折る 力自慢。 おしりの 器官から 匂いを 出し 仲間と コミュニケーションをとる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "れんぞくころがり" },
			damage: "10+",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556707,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [759],
};

export default card;
