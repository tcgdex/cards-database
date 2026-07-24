import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "チョンチー",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "光の 届かない 海底に 暮らす。 触手を 光らせ 仲間と コミュニケーション。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はたく" },
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: { ja: "スパーク" },
			damage: 10,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン2匹にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559173,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [170],
};

export default card;
