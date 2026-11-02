import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ウデッポウ",
		'zh-tw': "鐵臂槍蝦",
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "右の ハサミから 水を 噴き出し 移動。 バランスが 悪いので まっすぐ 泳ぐのは 下手くそ。",
		'zh-tw': "從右邊的鉗子噴出水來移動。因為無法取得平衡，所以不擅長直線游動。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "みずでっぽう",
				'zh-tw': "水槍",
			},
			damage: 10,
			cost: ["Water"],
		},
		{
			name: {
				ja: "はさむ",
				'zh-tw': "夾住",
			},
			damage: 20,
			cost: ["Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571589,
				tcgplayer: 569330,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [692],
};

export default card;
