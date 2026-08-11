import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ライコウ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'ja-jp': "体内で 渦巻く 力を 電撃として 出しながら 大地を 駆け巡る 荒々しい ポケモン。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ロストボルテージ" },
			damage: "30+",
			cost: ["Lightning", "Colorless"],
			effect: {
				'ja-jp': "自分のロストゾーンに[雷]エネルギーがあるなら、90ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543691,
			},
		},
	],

	retreat: 2,
	regulationMark: "B",
	rarity: "None",
	dexId: [243],
};

export default card;
