import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・コケコ",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "好奇心旺盛な メレメレの 守り神。 雷雲を 呼び 雷を 身体に 溜め込む。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かいてんひこう" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "ライトニングボール" },
			damage: 100,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561226,
			},
		},
	],

	retreat: 0,
	rarity: "None",
	dexId: [785],
};

export default card;
