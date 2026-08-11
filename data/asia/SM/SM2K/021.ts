import { Card } from "models/database/card";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エレザード",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'ja-jp': "エリマキを 広げて 発電する。 エレザード １匹で 高層ビルで 必要な 電気を 作れるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "でんこうせっか" },
			damage: "20+",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを1回投げオモテなら、20ダメージ追加。",
			},
		},
		{
			name: { ja: "らくらい" },
			damage: 120,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561487,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "エリキテル",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [695],
};

export default card;
