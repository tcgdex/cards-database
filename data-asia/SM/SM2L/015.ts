import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "アローライシツブテ",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "磁力を 帯びた 石の身体。 特に 磁力が 強い 部分には 砂鉄が ビッシリ ついてるよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ロックカット" },
			cost: [],
			effect: {
				ja: "次の自分の番、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
		{
			name: { ja: "ころがる" },
			damage: 40,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561419,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [74],
};

export default card;
