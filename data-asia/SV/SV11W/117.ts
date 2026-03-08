import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ココロモリ",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "いろいろな 周波数の 音波を 鼻の 穴から 発射する。 岩を 破壊する 音波も 出す。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ハッピーリターン" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のベンチポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、手札にもどす。",
			},
		},
		{
			name: { ja: "かぜおこし" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
		},
	],

	evolveFrom: {
		ja: "コロモリ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [528],
	thirdParty: {
		cardmarket: 829474,
		tcgplayer: 636670,
	},
};

export default card;
