import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "ケケンカニ",
	},

	illustrator: "TOKIYA",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		ja: "とにかく 見境なく なぐる。 いざと なったら ハサミを 自切し ロケットのように 発射し なぐる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ゆきなだれ" },
			damage: 80,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
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
		ja: "マケンカニ",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [740],
};

export default card;
