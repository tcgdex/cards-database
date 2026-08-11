import { Card } from "models/database/card";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バルジーナ",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'ja-jp': "大空を 旋回 しながら 弱った ポケモンを 狙っている。 大好物は カラカラ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ゴミおとし" },
			cost: ["Darkness"],
			effect: {
				'ja-jp': "自分の手札にあるグッズを1枚トラッシュし、相手のポケモン1匹に、弱点・抵抗力を計算せず、60ダメージ。トラッシュできないなら、このワザは失敗。",
			},
		},
		{
			name: { ja: "ブレイブバード" },
			damage: 120,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558602,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "バルチャイ",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [630],
};

export default card;
