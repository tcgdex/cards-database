import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルーグ",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "古代人が 労働力 として ゴルーグを 発明したといわれる。 主の 命令に 忠実だ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "がんせきおとし" },
			damage: 40,
			cost: ["Psychic"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
		{
			name: { ja: "いにしえのこぶし" },
			damage: 160,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のトラッシュにサポートがあるなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554844,
			},
		},
	],

	evolveFrom: {
		ja: "ゴビット",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [623],
};

export default card;
