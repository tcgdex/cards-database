import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オニドリル",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'ja-jp': "遥か 太古の 壁画の中に オニドリルらしき ポケモンが 描かれていることが 判った。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ふきあらす" },
			cost: ["Colorless"],
			effect: {
				'ja-jp': "相手は相手自身の手札をすべて山札にもどして切る。その後、相手は山札を3枚引く。",
			},
		},
		{
			name: { ja: "スラッシュダウン" },
			damage: 60,
			cost: ["Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンは「スラッシュダウン」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561647,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "オニスズメ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [22],
};

export default card;
