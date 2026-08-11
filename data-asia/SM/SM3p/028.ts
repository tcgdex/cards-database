import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ひかるボルケニオン",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "水蒸気を 噴き出して 自分の 姿を 濃霧で 隠す。 人の 立ち入らない 山に 住むという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "デュアルポンプ" },
			cost: ["Water", "Water", "Water"],
			effect: {
				ja: "相手のポケモン2匹に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "グランドスマッシュ" },
			damage: "50×",
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを4回投げ、オモテの数x50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560186,
			},
		},
	],

	retreat: 3,
	rarity: "Shiny Ultra Rare",
	dexId: [721],
};

export default card;
