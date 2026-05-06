import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ポッタイシ",
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "仲間を 作らずに 暮らす。 翼の 強烈な 一撃は 大木を 真っ二つに へし折る。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "つつく"}, "damage": 20, "cost": ["Colorless"]}, {"name": {"ja": "ねらってダイブ"}, "cost": ["Colorless", "Colorless", "Colorless"], "effect": {"ja": "相手のベンチポケモン1匹に、70ダメージ。［ベンチは弱点・抵抗力を計算しない。］"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		ja: "ポッチャマ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [394],

	thirdParty: {
		cardmarket: 850535,
		tcgplayer: 655807,
	},
};

export default card;