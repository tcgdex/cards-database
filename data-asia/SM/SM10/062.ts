import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "プリン",
	},

	illustrator: "Yumi",
	category: "Pokemon",
	hp: 70,
	types: ["Fairy"],

	description: {
		ja: "デパートの 寝具コーナーには プリンの 不思議な 子守唄を 収録した ＣＤが 売られている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たまころがり" },
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557420,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [39],
};

export default card;
