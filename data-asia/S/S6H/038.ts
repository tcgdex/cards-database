import { Card } from "../../../interfaces";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒポポタス",
		'zh-tw': "沙河馬",
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "おもに 昼間に 活動する。 砂漠の夜は 冷えるので 砂の 奥深くに 潜って 眠る。",
		'zh-tw': "主要在白天活動。因為沙漠的夜晚會降溫，所以會鑽進沙子的深處睡覺。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "たいあたり" },
			damage: 30,
			cost: ["Fighting", "Colorless"],
		},
		{
			name: { ja: "マッドショット" },
			damage: 50,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560454,
				tcgplayer: 569170,
			},
		},
	],

	retreat: 4,
	regulationMark: "E",
	rarity: "Common",
	dexId: [449],
};

export default card;
