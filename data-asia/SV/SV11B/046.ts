import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルーグ",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	description: {
		ja: "マッハの スピードで 空を 飛ぶ。 胸の 封印を はがすと エネルギーが 暴走してしまう。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ダブルスマッシュ" },
			damage: "80x",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: { ja: "コインを2回投げ、オモテの数×80ダメージ。" },
		},
		{
			name: { ja: "ゴルーグハンマー" },
			damage: 200,
			cost: ["Psychic", "Psychic", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],

	resistances: [{ type: "Fighting", value: "-30" }],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	evolveFrom: {
		ja: "ゴビット",
	},

	retreat: 4,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [623],
};

export default card;
