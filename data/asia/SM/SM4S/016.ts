import { Card } from "models/database/card";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アローライシツブテ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'ja-jp': "磁力を 帯びた 石の身体。 特に 磁力が 強い 部分には 砂鉄が ビッシリ ついてるよ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まるくなる" },
			cost: [],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。",
			},
		},
		{
			name: { ja: "たいあたり" },
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560328,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [74],
};

export default card;
