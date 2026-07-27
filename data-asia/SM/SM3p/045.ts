import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルーグ",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "ゴルーグを 作った 古代人から 人や ポケモンを 守るように 命令されていると 言われている。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "トリプルスマッシュ" },
			damage: "10+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "コインを3回投げ、オモテの数x60ダメージ追加。",
			},
		},
		{
			name: { ja: "ゴルーグハンマー" },
			damage: 120,
			cost: ["Psychic", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560203,
			},
		},
	],

	evolveFrom: {
		ja: "ゴビット",
	},

	retreat: 4,
	rarity: "Uncommon",
	dexId: [623],
};

export default card;
