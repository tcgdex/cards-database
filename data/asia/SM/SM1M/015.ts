import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ケケンカニ",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'ja-jp': "とにかく 見境なく なぐる。 いざと なったら ハサミを 自切し ロケットのように 発射し なぐる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ゆきなだれ" },
			damage: 80,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				'ja-jp': "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			},
		},
		{
			name: { ja: "アイスハンマー" },
			damage: 140,
			cost: ["Water", "Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561616,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マケンカニ",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [740],
};

export default card;
